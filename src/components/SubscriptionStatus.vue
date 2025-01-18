<script setup>
import { useSubscriptionStore } from '../store/subscription';
import { ref, onMounted } from 'vue';

const subscriptionStore = useSubscriptionStore();
const loading = ref(true);

onMounted(async () => {
  await subscriptionStore.fetchSubscriptionStatus();
  loading.value = false;
});
</script>

<template>
  <div class="subscription-status">
    <div v-if="loading" class="loading">
      Loading subscription status...
    </div>
    
    <div v-else-if="subscriptionStore.error" class="error-message" role="alert">
      {{ subscriptionStore.error }}
    </div>
    
    <div v-else class="status-card">
      <h3>Subscription Status</h3>
      
      <div v-if="subscriptionStore.isSubscribed" class="status-info">
        <div class="status-badge active">Active</div>
        <p class="renewal-info">
          Renews on: {{ new Date(subscriptionStore.expiresAt * 1000).toLocaleDateString() }}
        </p>
        <button @click="subscriptionStore.updatePaymentMethod" class="manage-button">
          Manage Subscription
        </button>
      </div>
      
      <div v-else class="status-info">
        <div class="status-badge inactive">Free Plan</div>
        <p class="upgrade-message">
          Upgrade to access all features and unlimited quizzes.
        </p>
        <router-link to="/subscription" class="upgrade-button">
          Upgrade Now
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subscription-status {
  background: var(--white);
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

h3 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.status-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 500;
}

.status-badge.active {
  background-color: rgba(6, 95, 70, 0.1);
  color: var(--success-color);
}

.status-badge.inactive {
  background-color: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
}

.renewal-info {
  color: var(--text-light);
}

.manage-button,
.upgrade-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.manage-button {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.manage-button:hover {
  background: rgba(37, 99, 235, 0.1);
}

.upgrade-button {
  background: var(--primary-color);
  color: var(--white);
  border: none;
}

.upgrade-button:hover {
  background: var(--primary-hover);
}

.loading {
  color: var(--text-light);
  text-align: center;
  padding: 1rem;
}

.error-message {
  color: var(--error-color);
  background: var(--error-bg);
  padding: 1rem;
  border-radius: 0.375rem;
}
</style>