<script setup>
import { useAuthStore } from '../store/auth';
import { getQuizProgress } from '../lib/supabase';
import { useQuizStore } from '../store/quiz';
import { ref, onMounted, computed } from 'vue';
import { useMasteryStatus } from '../composables/useMasteryStatus';
import SubscriptionStatus from '../components/SubscriptionStatus.vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const quizStore = useQuizStore();
const userProgress = ref(null);
const correctPercentage = ref(0);

const { masteredQuestions, attemptedQuestions, loading: masteryLoading } = useMasteryStatus();

const completionPercentage = computed(() => {
  if (!userProgress.value?.questions_completed) return 0;
  return Math.round(userProgress.value.questions_completed);
});

const loading = ref(true);

// Redirect if not authenticated
if (!authStore.isAuthenticated) {
  router.push('/');
}

onMounted(async () => {
  if (authStore.user) {
    try {
      const progress = await getQuizProgress(authStore.user.id);
      userProgress.value = progress;
      // Calculate percentage of correct answers
      if (progress.total_attempts > 0) {
        correctPercentage.value = Math.round((progress.correct_answers / progress.total_attempts) * 100);
      }
    } catch (error) {
      console.error('Error fetching user progress:', error);
    } finally {
      loading.value = false;
    }
  } 
});
</script>

<template>
  <div class="profile-container">
    <h2>User Profile</h2>
    
    <div v-if="loading" class="loading">
      Loading profile data...
    </div>
    
    <div v-else class="profile-content">
      <div class="profile-section">
        <h3>Account Information</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">Email:</span>
            <span class="value">{{ authStore.user?.email }}</span>
          </div>
          <div class="info-item">
            <span class="label">Member Since:</span>
            <span class="value">{{ new Date(authStore.user?.created_at).toLocaleDateString() }}</span>
          </div>
        </div>
      </div>

      <div class="profile-section">
        <SubscriptionStatus />
      </div>

      <div class="profile-section">
        <h3>CPACC Quiz Progress</h3>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">{{ correctPercentage }}%</div>
            <div class="stat-label">Correct Answers</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ userProgress?.questions_completed ?? 0 }}</div>
            <div class="stat-label">Questions Completed</div>
          </div>
          <div class="stat-card mastered-card">
            <div class="stat-value">{{ masteredQuestions }}</div>
            <div class="stat-label">Questions Mastered</div>
            <div class="stat-description">Questions answered correctly 3+ times</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

h2 {
  font-size: var(--font-size-2xl);
  color: var(--text-color);
  margin-bottom: 2rem;
}

.loading {
  text-align: center;
  color: var(--text-light);
  padding: 2rem;
}

.profile-section {
  background: var(--white);
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.profile-section h3 {
  font-size: var(--font-size-xl);
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.info-grid {
  display: grid;
  gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  color: var(--text-light);
  font-size: var(--font-size-base);
}

.value {
  color: var(--text-color);
  font-size: var(--font-size-lg);
  font-weight: 500;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: var(--background-color);
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
}

.stat-value {
  font-size: var(--font-size-2xl);
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-light);
  font-size: var(--font-size-base);
}

.stat-description {
  color: var(--text-light);
  font-size: calc(var(--font-size-base) * 0.875);
  font-style: italic;
  margin-top: 0.5rem;
}

.mastered-card {
  position: relative;
}

.mastered-header {
  margin-bottom: 1rem;
}

.toggle-button {
  background: var(--primary-color);
  color: var(--white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: calc(var(--font-size-base) * 0.875);
  transition: background-color 0.2s ease;
}

.toggle-button:hover {
  background: var(--primary-hover);
}

.toggle-button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

.mastered-list {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--text-light);
}

.no-mastered {
  color: var(--text-light);
  font-style: italic;
  font-size: calc(var(--font-size-base) * 0.875);
}

@media (max-width: 640px) {
  .profile-container {
    margin: 1rem auto;
  }

  .profile-section {
    padding: 1rem;
  }

  .stat-card {
    padding: 1rem;
  }

  .stat-value {
    font-size: var(--font-size-xl);
  }
}
</style>