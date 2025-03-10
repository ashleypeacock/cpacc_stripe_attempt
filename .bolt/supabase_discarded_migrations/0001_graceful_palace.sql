/*
  # Initial Database Schema for CPACC Quiz App

  1. Tables
    - quiz_progress: Tracks user progress and scores
    - question_attempts: Records individual question attempts
    - login_attempts: Monitors login security
    - security_events: Logs security-related events
    - error_logs: Tracks system errors

  2. Views
    - user_mastery_stats: Aggregates question mastery data
    - login_attempt_analysis: Analyzes login patterns

  3. Functions
    - update_updated_at_column(): Manages timestamps
    - cleanup_old_attempts(): Maintenance routine
    - get_friendly_error_message(): Error handling
    - record_security_event(): Security logging

  4. Security
    - RLS policies for all tables
    - Secure access patterns
*/

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tables
CREATE TABLE quiz_progress (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id),
  questions_completed INTEGER DEFAULT 0,
  correct_answers INTEGER DEFAULT 0,
  total_attempts INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE question_attempts (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  question_id INTEGER NOT NULL,
  correct BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE login_attempts (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL,
  ip_address TEXT,
  attempted_at TIMESTAMPTZ DEFAULT now(),
  success BOOLEAN DEFAULT false
);

CREATE TABLE security_events (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  event_type TEXT NOT NULL,
  description TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE error_logs (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  error_code TEXT,
  error_message TEXT,
  context JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create functions
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION cleanup_old_attempts()
RETURNS void AS $$
BEGIN
  DELETE FROM login_attempts
  WHERE attempted_at < now() - INTERVAL '24 hours';
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_friendly_error_message(error_code text)
RETURNS text AS $$
BEGIN
  CASE error_code
    WHEN '23505' THEN 
      RETURN 'An account with this email address already exists. Please sign in or use a different email.';
    WHEN 'P0001' THEN
      RETURN 'Your session has expired. Please sign in again.';
    WHEN '23503' THEN
      RETURN 'Unable to complete this action. Please try again.';
    WHEN '42501' THEN
      RETURN 'You do not have permission to perform this action.';
    ELSE
      RETURN 'An unexpected error occurred. Please try again.';
  END CASE;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION record_security_event(
  p_user_id UUID,
  p_event_type TEXT,
  p_description TEXT,
  p_ip_address TEXT DEFAULT NULL,
  p_user_agent TEXT DEFAULT NULL
) RETURNS void AS $$
BEGIN
  INSERT INTO security_events (
    user_id,
    event_type,
    description,
    ip_address,
    user_agent
  ) VALUES (
    p_user_id,
    p_event_type,
    p_description,
    p_ip_address,
    p_user_agent
  );
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER update_quiz_progress_updated_at
  BEFORE UPDATE ON quiz_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create views
CREATE VIEW user_mastery_stats AS 
WITH mastered_questions AS (
  SELECT 
    user_id,
    question_id,
    COUNT(*) FILTER (WHERE correct) AS correct_count
  FROM question_attempts
  GROUP BY user_id, question_id
  HAVING COUNT(*) FILTER (WHERE correct) >= 3
)
SELECT 
  user_id,
  COUNT(DISTINCT question_id) as mastered_questions,
  ARRAY_AGG(DISTINCT question_id) as mastered_question_ids,
  (
    SELECT COUNT(DISTINCT question_id) 
    FROM question_attempts qa 
    WHERE qa.user_id = mq.user_id
  ) as attempted_questions
FROM mastered_questions mq
GROUP BY user_id;

CREATE VIEW login_attempt_analysis AS
WITH recent_attempts AS (
  SELECT 
    email,
    COUNT(*) FILTER (WHERE NOT success) as failed_attempts,
    MAX(attempted_at) as last_attempt
  FROM login_attempts
  WHERE attempted_at > now() - INTERVAL '15 minutes'
  GROUP BY email
)
SELECT 
  email,
  failed_attempts,
  last_attempt,
  CASE 
    WHEN failed_attempts >= 5 THEN true 
    ELSE false 
  END as is_rate_limited
FROM recent_attempts;

-- Enable Row Level Security
ALTER TABLE quiz_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE login_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE security_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can read their own progress"
  ON quiz_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
  ON quiz_progress FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress"
  ON quiz_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own attempts"
  ON question_attempts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own attempts"
  ON question_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own security events"
  ON security_events FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Only admins can view error logs"
  ON error_logs FOR SELECT
  USING (auth.jwt() ->> 'role' = 'service_role');

-- Grant permissions
GRANT SELECT ON user_mastery_stats TO authenticated;
GRANT SELECT ON login_attempt_analysis TO authenticated;

-- Create indexes for performance
CREATE INDEX idx_question_attempts_user_id ON question_attempts(user_id);
CREATE INDEX idx_question_attempts_question_id ON question_attempts(question_id);
CREATE INDEX idx_login_attempts_email ON login_attempts(email);
CREATE INDEX idx_login_attempts_attempted_at ON login_attempts(attempted_at);
CREATE INDEX idx_security_events_user_id ON security_events(user_id);
CREATE INDEX idx_security_events_created_at ON security_events(created_at);