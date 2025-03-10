/*
  # Quiz Application Schema
  
  This migration sets up the core schema for the quiz application.
  
  1. Tables
    - quiz_progress: Tracks user quiz completion and scores
    - question_attempts: Records individual question attempts
    - user_preferences: Stores user preferences and consent
  
  2. Views
    - user_mastery_stats: Aggregates user mastery statistics
  
  3. Security
    - RLS enabled on all tables
    - Policies for authenticated user access
*/

-- Create tables if they don't exist
DO $$ 
BEGIN
  -- Create quiz_progress if it doesn't exist
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'quiz_progress') THEN
    CREATE TABLE quiz_progress (
      user_id UUID PRIMARY KEY REFERENCES auth.users(id),
      questions_completed INTEGER DEFAULT 0,
      total_attempts INTEGER DEFAULT 0,
      correct_answers INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
  END IF;

  -- Create question_attempts if it doesn't exist
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'question_attempts') THEN
    CREATE TABLE question_attempts (
      id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
      user_id UUID REFERENCES auth.users(id),
      question_id INTEGER NOT NULL,
      correct BOOLEAN NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  END IF;

  -- Create user_preferences if it doesn't exist
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'user_preferences') THEN
    CREATE TABLE user_preferences (
      id UUID PRIMARY KEY REFERENCES auth.users(id),
      marketing_consent BOOLEAN DEFAULT FALSE,
      newsletter_consent BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
  END IF;
END $$;

-- Enable RLS (idempotent)
DO $$ 
BEGIN
  ALTER TABLE IF EXISTS quiz_progress ENABLE ROW LEVEL SECURITY;
  ALTER TABLE IF EXISTS question_attempts ENABLE ROW LEVEL SECURITY;
  ALTER TABLE IF EXISTS user_preferences ENABLE ROW LEVEL SECURITY;
END $$;

-- Create policies (dropping existing ones first to avoid conflicts)
DO $$ 
BEGIN
  -- Quiz Progress Policies
  DROP POLICY IF EXISTS "Users can read own progress" ON quiz_progress;
  DROP POLICY IF EXISTS "Users can update own progress" ON quiz_progress;
  DROP POLICY IF EXISTS "Users can insert own progress" ON quiz_progress;
  
  CREATE POLICY "Users can read own progress"
    ON quiz_progress FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

  CREATE POLICY "Users can update own progress"
    ON quiz_progress FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

  CREATE POLICY "Users can insert own progress"
    ON quiz_progress FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

  -- Question Attempts Policies
  DROP POLICY IF EXISTS "Users can read own attempts" ON question_attempts;
  DROP POLICY IF EXISTS "Users can insert own attempts" ON question_attempts;
  
  CREATE POLICY "Users can read own attempts"
    ON question_attempts FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

  CREATE POLICY "Users can insert own attempts"
    ON question_attempts FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

  -- User Preferences Policies
  DROP POLICY IF EXISTS "Users can read own preferences" ON user_preferences;
  DROP POLICY IF EXISTS "Users can update own preferences" ON user_preferences;
  DROP POLICY IF EXISTS "Users can insert own preferences" ON user_preferences;
  
  CREATE POLICY "Users can read own preferences"
    ON user_preferences FOR SELECT
    TO authenticated
    USING (auth.uid() = id);

  CREATE POLICY "Users can update own preferences"
    ON user_preferences FOR UPDATE
    TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

  CREATE POLICY "Users can insert own preferences"
    ON user_preferences FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = id);
END $$;

-- Create or replace function for updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers (dropping existing ones first)
DO $$
BEGIN
  DROP TRIGGER IF EXISTS update_quiz_progress_updated_at ON quiz_progress;
  DROP TRIGGER IF EXISTS update_user_preferences_updated_at ON user_preferences;
  
  CREATE TRIGGER update_quiz_progress_updated_at
    BEFORE UPDATE ON quiz_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

  CREATE TRIGGER update_user_preferences_updated_at
    BEFORE UPDATE ON user_preferences
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
END $$;

-- Drop and recreate view
DROP VIEW IF EXISTS user_mastery_stats;
CREATE VIEW user_mastery_stats AS
WITH mastered_questions AS (
  SELECT 
    question_id,
    user_id
  FROM (
    SELECT 
      question_id,
      user_id,
      COUNT(*) FILTER (WHERE correct) AS correct_count,
      COUNT(*) AS total_attempts
    FROM question_attempts
    GROUP BY question_id, user_id
    HAVING COUNT(*) >= 5 AND COUNT(*) FILTER (WHERE correct) >= 3
  ) sq
)
SELECT 
  user_id,
  COUNT(DISTINCT question_id) as mastered_questions,
  (SELECT COUNT(DISTINCT question_id) FROM question_attempts WHERE user_id = mq.user_id) as attempted_questions
FROM mastered_questions mq
GROUP BY user_id;

-- Grant access to the view
GRANT SELECT ON user_mastery_stats TO authenticated;