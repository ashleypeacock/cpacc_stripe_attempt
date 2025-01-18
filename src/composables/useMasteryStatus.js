import { ref, onMounted } from 'vue';
import { useAuthStore } from '../store/auth';
import { getMasteryStats } from '../lib/supabase';

export function useMasteryStatus() {
  const authStore = useAuthStore();
  const masteredQuestions = ref(0);
  const attemptedQuestions = ref(0);
  const loading = ref(true);
  const error = ref(null);

  async function fetchMasteryStats() {
    if (!authStore.isAuthenticated) {
      loading.value = false;
      return;
    }

    try {
      const stats = await getMasteryStats(authStore.user.id);
      masteredQuestions.value = stats.mastered_questions;
      attemptedQuestions.value = stats.attempted_questions;
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  }

  onMounted(fetchMasteryStats);

  return {
    masteredQuestions,
    attemptedQuestions,
    loading,
    error,
    refresh: fetchMasteryStats
  };
}