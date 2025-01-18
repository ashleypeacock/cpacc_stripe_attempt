import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { questions as englishQuestions } from '../data/questions';
import { QuizDomain } from '../constants/quizDomains';
import { shuffleArray } from '../utils/arrayUtils';
import { useAuthStore } from './auth';
import { useSubscriptionStore } from './subscription';
import { logError } from '../utils/logger';
import { recordQuestionAttempt } from '../lib/supabase';
import { router } from '../router';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    currentQuestion: 0,
    score: 0,
    answers: [],
    completed: false,
    selectedDomain: null,
    selectedQuestions: [],
    requiresAuth: false,
    masteredQuestionIds: new Set()
  }),

  getters: {
    currentQuestionData: (state) => state.selectedQuestions[state.currentQuestion],
    isLastQuestion: (state) => state.currentQuestion === state.selectedQuestions.length - 1,
    progress: (state) => {
      if (state.selectedQuestions.length === 0) return 0;
      return (state.currentQuestion / state.selectedQuestions.length) * 100;
    },
    questions() {
      return englishQuestions;
    },
    totalQuestions() {
      return this.questions.length;
    },
    questionsPerQuiz: () => 20,
    isQuestionMastered: (state) => (questionId) => {
      return state.masteredQuestionIds.has(questionId);
    }
  },

  actions: {
    async checkAuthRequirement() {
      const authStore = useAuthStore();
      const subscriptionStore = useSubscriptionStore();
      
      try {
        if (!authStore.isAuthenticated) {
          if (this.currentQuestion >= 9) { // After 10 questions (0-9)
            this.requiresAuth = true;
            return true;
          }
        } else if (!subscriptionStore.isSubscribed && this.currentQuestion >= 9) {
          router.push('/subscription', { 
            query: { 
              message: 'Upgrade to Premium to access unlimited questions!' 
            }
          });
          return true;
        }
        return false;
      } catch (error) {
        console.error('Error checking auth requirement:', error);
        return false;
      }
    },

    async updateProgress() {
      const authStore = useAuthStore();
      try {
        if (authStore.isAuthenticated && authStore.user?.id) {
          const result = await recordQuestionAttempt(
            authStore.user.id,
            this.currentQuestionData.id,
            this.answers[this.answers.length - 1] === this.currentQuestionData.correctAnswer
          );
          
          if (!result.success) {
            logError('Failed to record question attempt', result.error);
          }
        }
      } catch (error) {
        logError('Error in quiz progress update', error, {
          currentQuestion: this.currentQuestion,
          domain: this.selectedDomain
        });
      }
    },

    async submitAnswer(answer) {
      this.answers.push(answer);
      if (answer === this.currentQuestionData?.correctAnswer) {
        this.score++;
      }
    },

    async nextQuestion() {
      await this.updateProgress();
      
      if (await this.checkAuthRequirement()) {
        return;
      }
      
      if (!this.isLastQuestion) {
        this.currentQuestion++;
      } else {
        this.completed = true;
      }
    },

    selectDomain(domain) {
      this.selectedDomain = domain;
      
      if (!this.questions || this.questions.length === 0) {
        console.error('No questions available');
        return false;
      }
      
      const domainQuestions = this.questions.filter(q => {
        const questionDomain = q.domain?.toLowerCase();
        const selectedDomain = domain?.toLowerCase();
        return questionDomain === selectedDomain;
      });
      
      if (domainQuestions.length === 0) {
        logError('No questions found for domain', null, { domain });
        return false;
      }

      // Always select at least 10 questions for free users
      const minQuestions = 10;
      const numQuestionsToSelect = Math.min(Math.max(minQuestions, this.questionsPerQuiz), domainQuestions.length);
      this.selectedQuestions = shuffleArray(domainQuestions).slice(0, numQuestionsToSelect);
      this.resetQuiz();
      return true;
    },

    resetQuiz() {
      this.currentQuestion = 0;
      this.score = 0;
      this.answers = [];
      this.completed = false;
    }
  }
});