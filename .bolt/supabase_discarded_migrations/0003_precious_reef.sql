/*
  # Initial Database Schema for CPACC Quiz App
  
  Sets up core tables and security policies if they don't already exist.
  Uses safe creation patterns to avoid conflicts.
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tables only if they don't exist
DO $$ BEGIN
  -- Create quiz_progress if it doesn't exist
  CREATE TABLE IF NOT EXISTS quiz_progress (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id),
    questions_completed INTEGER DEFAULT 0,
    correct_answers INTEGER DEFAULT 0,
    total_attempts INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
  );

  -- Create question_attempts if it doesn't exist
  CREATE TABLE IF NOT EXISTS question_attempts (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    question_id INTEGER NOT NULL,
    correct BOOLEAN NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
  );

  -- Create user_preferences if it doesn't exist
  CREATE TABLE IF NOT EXISTS user_preferences (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    marketing_consent BOOLEAN DEFAULT false,
    newsletter_consent BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
  );

EXCEPTION
  WHEN duplicate_table THEN
    NULL;
END $$;

-- Safely enable RLS
DO $$ BEGIN
  EXECUTE 'ALTER TABLE quiz_progress ENABLE ROW LEVEL SECURITY';
EXCEPTION
  WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  EXECUTE 'ALTER TABLE question_attempts ENABLE ROW LEVEL SECURITY';
EXCEPTION
  WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  EXECUTE 'ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY';
EXCEPTION
  WHEN others THEN NULL;
END $$;

-- Safely create policies
DO $$ BEGIN
  DROP POLICY IF EXISTS "Users can read their own progress" ON quiz_progress;
  CREATE POLICY "Users can read their own progress"
    ON quiz_progress FOR SELECT
    USING (auth.uid() = user_id);

  DROP POLICY IF EXISTS "Users can update their own progress" ON quiz_progress;
  CREATE POLICY "Users can update their own progress"
    ON quiz_progress FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

  DROP POLICY IF EXISTS "Users can insert their own progress" ON quiz_progress;
  CREATE POLICY "Users can insert their own progress"
    ON quiz_progress FOR INSERT
    WITH CHECK (auth.uid() = user_id);

  DROP POLICY IF EXISTS "Users can read their own attempts" ON question_attempts;
  CREATE POLICY "Users can read their own attempts"
    ON question_attempts FOR SELECT
    USING (auth.uid() = user_id);

  DROP POLICY IF EXISTS "Users can insert their own attempts" ON question_attempts;
  CREATE POLICY "Users can insert their own attempts"
    ON question_attempts FOR INSERT
    WITH CHECK (auth.uid() = user_id);

  DROP POLICY IF EXISTS "Users can read their own preferences" ON user_preferences;
  CREATE POLICY "Users can read their own preferences"
    ON user_preferences FOR SELECT
    USING (auth.uid() = id);

  DROP POLICY IF EXISTS "Users can update their own preferences" ON user_preferences;
  CREATE POLICY "Users can update their own preferences"
    ON user_preferences FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);
END $$;

-- Safely create indexes
DO $$ BEGIN
  CREATE INDEX IF NOT EXISTS idx_question_attempts_user_id 
    ON question_attempts(user_id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE INDEX IF NOT EXISTS idx_question_attempts_question_id 
    ON question_attempts(question_id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;