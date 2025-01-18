<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSubscriptionStore } from '../store/subscription';

const router = useRouter();
const subscriptionStore = useSubscriptionStore();

onMounted(async () => {
  await subscriptionStore.fetchSubscriptionStatus();
  setTimeout(() => {
    router.push('/profile');
  }, 5000);
});
</script>

<template>
  <div class="success-page">
    <div class="success-card">
      <div class="success-icon">✨</div>
      <h1>Thank You!</h1>
      <p class="message">Your subscription has been activated successfully.</p>
      <p class="redirect">You will be redirected to your profile in a few seconds...</p>
      <button @click="router.push('/profile')" class="profile-button">
        Go to Profile
      </button>
    </div>
  </div>
</template>

<style scoped>
.success-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.success-card {
  background: var(--white);
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: var(--shadow);
  max-width: 500px;
  width: 100%;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: bounce 1s ease infinite;
}

h1 {
  color: var(--success-color);
  margin-bottom: 1rem;
}

.message {
  color: var(--text-color);
  font-size: var(--font-size-lg);
  margin-bottom: 1rem;
}

.redirect {
  color: var(--text-light);
  margin-bottom: 2rem;
}

.profile-button {
  background: var(--primary-color);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: background-color 0.2s;
}

.profile-button:hover {
  background: var(--primary-hover);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 640px) {
  .success-card {
    padding: 2rem;
  }
}
</style>