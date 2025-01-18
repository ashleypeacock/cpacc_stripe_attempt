export function calculateScore(answers, correctAnswers) {
  return answers.reduce((score, answer, index) => {
    return score + (answer === correctAnswers[index] ? 1 : 0);
  }, 0);
}

export function getScoreMessage(percentage) {
  if (percentage >= 90) return '🏆 Outstanding! You\'re a CPACC expert!';
  if (percentage >= 80) return '🌟 Excellent work! Almost there!';
  if (percentage >= 70) return '👍 Good effort! Keep practicing!';
  return '📚 Keep learning! You\'ll improve!';
}

export function getCelebrationEmoji(percentage) {
  if (percentage >= 90) return '🎉🏆✨';
  if (percentage >= 80) return '🌟🎉✨';
  if (percentage >= 70) return '👏🎉';
  return '💪📚';
}