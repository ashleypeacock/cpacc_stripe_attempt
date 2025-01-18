/*
  # Email Confirmation and User Setup
  
  1. Changes
    - Creates view for login attempt analysis
    - Creates view for user mastery stats
    - Adds trigger for user confirmation setup
  
  2. Security
    - Grants necessary permissions to authenticated users
    - Ensures secure handling of user data
*/

-- Create view for login attempt analysis
CREATE VIEW login_attempt_analysis AS
WITH recent_attempts AS (
  SELECT 
    email,
    COUNT(*) FILTER (WHERE NOT success) as failed_attempts,
    MAX(attempted_at) as last_attempt
  FROM login_attempts
  WHERE attempted_at > NOW() - INTERVAL '15 minutes'
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

-- Create view for user mastery stats
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

-- Grant access to views
GRANT SELECT ON user_mastery_stats TO authenticated;
GRANT SELECT ON login_attempt_analysis TO authenticated;

-- Create function to handle user setup after email confirmation
CREATE OR REPLACE FUNCTION handle_user_confirmation()
RETURNS TRIGGER AS $$
BEGIN
  -- Only proceed if email was just confirmed
  IF NEW.email_confirmed_at IS NOT NULL AND OLD.email_confirmed_at IS NULL THEN
    -- Create user preferences
    INSERT INTO public.user_preferences (
      id,
      marketing_consent,
      newsletter_consent
    ) VALUES (
      NEW.id,
      COALESCE((NEW.raw_app_meta_data->>'marketing_consent')::boolean, false),
      COALESCE((NEW.raw_app_meta_data->>'marketing_consent')::boolean, false)
    ) ON CONFLICT (id) DO NOTHING;

    -- Initialize quiz progress
    INSERT INTO public.quiz_progress (
      user_id,
      questions_completed,
      total_attempts,
      correct_answers
    ) VALUES (
      NEW.id,
      0,
      0,
      0
    ) ON CONFLICT (user_id) DO NOTHING;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on auth.users table
DROP TRIGGER IF EXISTS on_user_confirmation ON auth.users;
CREATE TRIGGER on_user_confirmation
  AFTER UPDATE ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_user_confirmation();