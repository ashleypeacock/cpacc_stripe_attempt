/*
  # Create User Mastery Stats View
  
  Creates a view to track user progress and mastery of questions:
  - Tracks questions where users have achieved 3+ correct answers
  - Provides mastery statistics and attempted question counts
  - Grants appropriate access permissions
*/

-- Drop existing view if it exists
DROP VIEW IF EXISTS user_mastery_stats;

-- Create mastery stats view
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

-- Grant access to the view
GRANT SELECT ON user_mastery_stats TO authenticated;