<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';
import { useSubscriptionStore } from '../store/subscription';
import PricingTable from '../components/PricingTable.vue';

const router = useRouter();
const authStore = useAuthStore();
const subscriptionStore = useSubscriptionStore();
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  if (!authStore.isAuthenticated) {
    router.push('/');
    return;
  }
  await subscriptionStore.fetchSubscriptionStatus();
});

async function handleSubscribe() {
  loading.value = true;
  error.value = null;

  try {
    await subscriptionStore.subscribe({
      priceId: 'price_1QgvAvGbQJX8UOv9cnrJQySmDOzmaHOnTdaiS2RSUDuYlkejzILZOS5MvVigjgOxfbV7AXIpp0TLLhKWZWTDMqGP00KUeTinjx'
    });
  } catch (err) {
    error.value = err.message;
    console.error('Subscription error:', err);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="subscription-page">
    <div class="header">
      <h1>Upgrade to Premium</h1>
      <p class="subtitle">Get unlimited access to all features and study materials</p>
    </div>

    <PricingTable @subscribe="handleSubscribe" />

    <div v-if="error" class="error-message" role="alert">
      {{ error }}
    </div>

    <div class="features">
      <h2>Premium Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>Unlimited Practice</h3>
          <p>Take as many quizzes as you need to master the material</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Detailed Analytics</h3>
          <p>Track your progress and identify areas for improvement with detailed performance metrics</p>
        </div>
      </div>
    </div>

    <div class="guarantee">
      <h2>30-Day Money-Back Guarantee</h2>
      <p>
        If you're not satisfied with your subscription, we'll give you a full refund
        within the first 30 days. No questions asked.
      </p>
    </div>
  </div>
</template>

<style scoped>
.subscription-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

h1 {
  font-size: var(--font-size-2xl);
  color: var(--text-color);
  margin-bottom: 1rem;
}

.subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-light);
}

.error-message {
  background-color: rgba(220, 38, 38, 0.1);
  color: var(--error-color);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  text-align: center;
}

.features {
  margin: 4rem 0;
}

.features h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: var(--font-size-xl);
  color: var(--text-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--white);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: var(--shadow);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: var(--font-size-lg);
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: var(--text-light);
  line-height: 1.6;
}

.guarantee {
  text-align: center;
  margin: 4rem 0;
  padding: 2rem;
  background: var(--white);
  border-radius: 1rem;
  box-shadow: var(--shadow);
}

.guarantee h2 {
  font-size: var(--font-size-xl);
  color: var(--text-color);
  margin-bottom: 1rem;
}

.guarantee p {
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .subscription-page {
    padding: 1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: calc(var(--font-size-2xl) * 0.8);
  }

  .subtitle {
    font-size: var(--font-size-base);
  }
}
</style>