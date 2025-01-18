export function trackEvent(eventName, eventParams = {}) {
  if (window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      ...eventParams
    });
  }
}

export function trackQuizCompletion(score, totalQuestions, domain) {
  trackEvent('quiz_completion', {
    score,
    total_questions: totalQuestions,
    domain,
    percentage: Math.round((score / totalQuestions) * 100)
  });
}

export function trackShare(platform, score) {
  trackEvent('share', {
    method: platform,
    content_type: 'quiz_result',
    score
  });
}