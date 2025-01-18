<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useQuizStore } from '../store/quiz';
import QuestionOptions from '../components/QuestionOptions.vue';
import QuestionExplanation from '../components/QuestionExplanation.vue';
import ProgressBar from '../components/ProgressBar.vue';
import MasteryBadge from '../components/MasteryBadge.vue';

const router = useRouter();
const quizStore = useQuizStore();
const selectedAnswer = ref(null);
const showExplanation = ref(false);

const handleBack = () => {
  if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
    quizStore.resetQuiz();
    router.push('/');
  }
};

const currentQuestion = computed(() => quizStore.currentQuestionData);
const progress = computed(() => quizStore.progress);
const isLastQuestion = computed(() => quizStore.isLastQuestion);

async function handleAnswerSelect(answer) {
  if (showExplanation.value) return;
  selectedAnswer.value = answer;
  showExplanation.value = true;
  await quizStore.submitAnswer(answer);
}

async function handleNext() {
  showExplanation.value = false;
  selectedAnswer.value = null;
  
  if (isLastQuestion.value) {
    router.push('/results');
  } else {
    await quizStore.nextQuestion();
  }
}

// Redirect if no questions are selected
if (!quizStore.selectedQuestions.length) {
  router.push('/');
}
</script>

<template>
  <div class="quiz-page">
    <div class="back-button-container">
      <button 
        @click="handleBack" 
        class="button back-button"
        aria-label="Return to home page"
      >
        <span class="button-icon">←</span>
        <span>Back</span>
      </button>
    </div>
    
    <div class="quiz-container">
    <ProgressBar :progress="progress" />
    
    <div v-if="currentQuestion" class="question-content">
      <h2 class="question-text" :id="'question-' + currentQuestion.id">
        {{ currentQuestion.text }}
      </h2>
      
      <QuestionOptions
        :options="currentQuestion.options"
        :correctAnswer="currentQuestion.correctAnswer"
        :showExplanation="showExplanation"
        :selectedAnswer="selectedAnswer"
        :isMastered="quizStore.isQuestionMastered(currentQuestion.id)"
        @select="handleAnswerSelect"
      />
      
      <QuestionExplanation
        v-if="showExplanation"
        :explanation="currentQuestion.explanation"
        :sourceLink="currentQuestion.sourceLink"
      />
      
      <button 
        v-if="showExplanation"
        @click="handleNext"
        class="next-button"
      >
        {{ isLastQuestion ? 'See Results' : 'Next Question' }}
      </button>
    </div>
  </div>
  </div>
</template>

<style scoped>
.quiz-page {
  width: 100%;
  max-width: var(--container-width-md);
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
}

.back-button-container {
  margin-bottom: var(--spacing-md);
}

.button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  font-size: var(--font-size-base);
}

.back-button {
  background-color: var(--background-color);
  color: var(--text-color);
  border: 2px solid var(--text-light);
  width: fit-content;
}

.back-button:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.button-icon {
  font-size: 1.25rem;
  line-height: 1;
}

.back-button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

.quiz-container {
  width: 100%;
  max-width: var(--container-width-md);
  margin: 2rem auto;
  padding: 2rem;
  background: var(--white);
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  box-sizing: border-box;
  overflow-x: hidden;
}

.question-content {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.question-text {
  font-size: var(--font-size-xl);
  color: var(--text-color);
  margin-bottom: 2rem;
  line-height: 1.4;
  width: 100%;
  word-break: break-word;
}

.next-button {
  background: var(--primary-color);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 2rem;
  width: 100%;
  font-size: var(--font-size-lg);
}

.next-button:hover {
  background: var(--primary-hover);
}

.next-button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

@media (max-width: 768px) {
  .quiz-page {
    padding: 0 var(--spacing-xs);
  }

  .quiz-container {
    margin: var(--spacing-md) auto;
    padding: var(--spacing-md);
    width: calc(100% - var(--spacing-md) * 2);
  }

  .question-text {
    font-size: calc(var(--font-size-xl) * 0.9);
    margin-bottom: var(--spacing-md);
  }
}

@media (max-width: 480px) {
  .quiz-container {
    margin: var(--spacing-sm) auto;
    padding: var(--spacing-sm);
    width: calc(100% - var(--spacing-sm) * 2);
  }

  .question-text {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-sm);
  }
}
</style>