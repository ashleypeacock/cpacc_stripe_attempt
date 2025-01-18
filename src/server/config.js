<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useQuizStore } from '../store/quiz';
import { useSubscriptionStore } from '../store/subscription';
import { ref } from 'vue';
import ShareScore from '../components/ShareScore.vue';

const router = useRouter();
const route = useRoute();
const quizStore = useQuizStore();
const subscriptionStore = useSubscriptionStore();
const origin = ref(typeof window !== 'undefined' ? window.location.origin : '');

const score = computed(() => quizStore.score);
const totalQuestions = computed(() => quizStore.selectedQuestions.length);
const percentage = computed(() => Math.round((score.value / totalQuestions.value) * 100));

const getScoreMessage = computed(() => {
  if (percentage.value >= 90) return '🏆 Outstanding! You\'re a CPACC expert!';
  if (percentage.value >= 80) return '🌟 Excellent work! Almost there!';
  if (percentage.value >= 70) return '👍 Good effort! Keep practicing!';
  return '📚 Keep learning! You\'ll improve!';
});

const getCelebrationEmoji = computed(() => {
  if (percentage.value >= 90) return '🎉🏆✨';
  if (percentage.value >= 80) return '🌟🎉✨';
  if (percentage.value >= 70) return '👏🎉';
  return '💪📚';
});

const returnHome = () => {
  quizStore.resetQuiz();
  router.push('/');
};

const retryQuiz = () => {
  const domain = quizStore.selectedDomain;
  quizStore.resetQuiz();
  if (domain) {
    quizStore.selectDomain(domain);
    router.push('/quiz');
  }
};
</script>

<template>
  <div class="results-container">
    <div class="celebration-emoji" role="presentation">{{ getCelebrationEmoji }}</div>
    
    <h2>Quiz Results</h2>
    
    <div class="score-card">
      <div class="score-circle" :class="[
        percentage >= 90 ? 'excellent' :
        percentage >= 80 ? 'great' :
        percentage >= 70 ? 'good' : 'needs-improvement'
      ]">
        <span class="score-percentage">{{ percentage }}%</span>
      </div>
      
      <p class="score-details">
        You got <strong>{{ score }}</strong> out of <strong>{{ totalQuestions }}</strong> questions correct
      </p>
      
      <p class="score-message">{{ getScoreMessage }}</p>
    </div>

    <div v-if="!subscriptionStore.isSubscribed" class="upgrade-card">
      <h3>Want to improve your score?</h3>
      <p>Upgrade to Premium for:</p>
      <ul>
        <li>✓ Unlimited quiz attempts</li>
    <ShareScore 
      :score="score"
      :totalQuestions="totalQuestions"
      :domain="origin + route.fullPath"
    />

    <div class="action-buttons">
      <button @click="retryQuiz" class="button retry-button">
        Try Again
      </button>
      <button @click="returnHome" class="button home-button">
        Return Home
      </button>
    </div>
  </div>
</template>

<style scoped>
.results-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--white);
  border-radius: 1rem;
  box-shadow: var(--shadow);
  text-align: center;
}

.celebration-emoji {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: celebrate 1s ease-out;
}

h2 {
  font-size: var(--font-size-2xl);
  color: var(--text-color);
  margin-bottom: 2rem;
}

.score-card {
  margin: 2rem 0;
}

.score-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  border: 8px solid;
  animation: pulse 2s infinite;
}

.score-circle.excellent {
  border-color: #059669;
  color: #059669;
}

.score-circle.great {
  border-color: #0284c7;
  color: #0284c7;
}

.score-circle.good {
  border-color: #d97706;
  color: #d97706;
}

.score-circle.needs-improvement {
  border-color: #dc2626;
  color: #dc2626;
}

.score-percentage {
  font-size: var(--font-size-2xl);
  font-weight: bold;
}

.score-details {
  font-size: var(--font-size-lg);
  color: var(--text-color);
  margin-bottom: 1rem;
}

.score-message {
  font-size: var(--font-size-base);
  color: var(--text-light);
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: var(--font-size-base);
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
  border: none;
}

.retry-button {
  background-color: var(--primary-color);
  color: var(--white);
}

.retry-button:hover {
  background-color: var(--primary-hover);
}

.home-button {
  background-color: var(--background-color);
  color: var(--text-color);
  border: 2px solid var(--text-light);
}

.home-button:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

@keyframes celebrate {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .results-container {
    margin: 1rem;
    padding: 1.5rem;
  }

  h2 {
    font-size: calc(var(--font-size-2xl) * 0.8);
  }

  .score-circle {
    width: 120px;
    height: 120px;
    border-width: 6px;
  }

  .score-percentage {
    font-size: calc(var(--font-size-2xl) * 0.8);
  }

  .score-details {
    font-size: var(--font-size-base);
  }

  .action-buttons {
    flex-direction: column;
  }

  .button {
    width: 100%;
  }
}
</style>