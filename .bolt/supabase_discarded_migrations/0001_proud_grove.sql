/*
  # Update Mastery View and Error Handling

  1. Changes
    - Add error handling functions and logging
    - Update mastery view with question IDs array
    - Add friendly error messages
  
  2. Security
    - Maintain RLS policies
    - Restrict error log access to admins
*/

-- Create function to get user-friendly error message
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

-- Create error logging table
CREATE TABLE IF NOT EXISTS error_logs (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  error_code text,
  error_message text,
  context jsonb,
  created_at timestamptz DEFAULT now()
);

-- Create function to log errors
CREATE OR REPLACE FUNCTION log_error(
  p_error_code text,
  p_error_message text,
  p_context jsonb DEFAULT '{}'::jsonb
) RETURNS void AS $$
BEGIN
  INSERT INTO error_logs (error_code, error_message, context)
  VALUES (p_error_code, p_error_message, p_context);
END;
$$ LANGUAGE plpgsql;

-- Enable RLS on error_logs
ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;

-- Create policy for error_logs
CREATE POLICY "Only admins can view error logs"
  ON error_logs
  FOR SELECT
  USING (auth.jwt() ->> 'role' = 'service_role');

-- Drop existing view if it exists
DROP VIEW IF EXISTS user_mastery_stats;

-- Create improved mastery stats view
CREATE OR REPLACE VIEW user_mastery_stats AS 
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

-- Ensure view permissions
GRANT SELECT ON user_mastery_stats TO authenticated;