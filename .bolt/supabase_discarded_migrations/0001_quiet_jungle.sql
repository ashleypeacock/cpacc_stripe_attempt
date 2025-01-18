/*
  # Update mastery criteria from 5 to 3 correct answers

  1. Changes
    - Modify mastery criteria from requiring 5 correct answers to 3
    - Update user_mastery_stats view to reflect new criteria
    
  2. Details
    - A question is now considered mastered when:
      - It has been attempted at least 3 times
      - At least 3 attempts were correct
    
  3. Security
    - Maintains existing security policies
    - Preserves SELECT access for authenticated users
*/

-- Drop existing view
DROP VIEW IF EXISTS user_mastery_stats;

-- Recreate view with updated criteria
CREATE OR REPLACE VIEW user_mastery_stats AS 
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
    HAVING COUNT(*) >= 3 AND COUNT(*)
    FILTER (WHERE correct) >= 3
  ) subquery
)
SELECT 
  user_id,
  COUNT(DISTINCT question_id) as mastered_questions,
  (SELECT COUNT(DISTINCT question_id) FROM question_attempts WHERE user_id = mq.user_id) as attempted_questions
FROM mastered_questions mq
GROUP BY user_id;

-- Ensure view permissions
GRANT SELECT ON user_mastery_stats TO authenticated;