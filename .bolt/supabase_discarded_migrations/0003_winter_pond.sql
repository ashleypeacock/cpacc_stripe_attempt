/*
  # Database Views

  1. Views
    - user_mastery_stats: Question mastery tracking
    - login_attempt_analysis: Security monitoring
*/

-- Create user_mastery_stats view
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

-- Create login_attempt_analysis view
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

-- Grant permissions
GRANT SELECT ON user_mastery_stats TO authenticated;
GRANT SELECT ON login_attempt_analysis TO authenticated;