<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '../store/auth';
import { useSubscriptionStore } from '../store/subscription';

const emit = defineEmits(['subscribe', 'error']);
const authStore = useAuthStore();
const subscriptionStore = useSubscriptionStore();
const error = ref(null);

const features = [
  { name: 'Unlimited quiz attempts', free: false, premium: true },
  { name: 'Detailed explanations', free: true, premium: true },
  { name: 'Progress tracking', free: false, premium: true },
  { name: 'Performance analytics', free: false, premium: true }
];

async function handleSubscribe() {
  console.log('Button clicked'); // Debug log
  error.value = null;
  
  try {
    console.log('Starting subscription process'); // Debug log
    await subscriptionStore.subscribe({
      priceId: 'price_1QgvAvGbQJX8UOv9cnrJQySmDOzmaHOnTdaiS2RSUDuYlkejzILZOS5MvVigjgOxfbV7AXIpp0TLLhKWZWTDMqGP00KUeTinjx',
      successUrl: `${window.location.origin}/subscription/success`,
      cancelUrl: `${window.location.origin}/subscription`
    });
  } catch (err) {
    console.error('Subscription error:', err); // Debug log
    error.value = err.message;
    emit('error', err.message);
  }
}
</script>

<template>
  <div class="pricing-table">
    <div class="plan free">
      <div class="plan-header">
        <h3>Free Plan</h3>
        <div class="price">$0</div>
        <div class="period">forever</div>
      </div>
      
      <ul class="features">
        <li 
          v-for="feature in features" 
          :key="feature.name"
          :class="{ included: feature.free }"
        >
          <span class="icon">{{ feature.free ? '✓' : '×' }}</span>
          {{ feature.name }}
        </li>
      </ul>
      
      <div class="plan-footer">
        <p>Perfect for trying out the platform</p>
      </div>
    </div>
    
    <div class="plan premium">
      <div class="plan-header">
        <h3>Premium Plan</h3>
        <div class="price">$49</div>
        <div class="period">per year</div>
      </div>
      
      <ul class="features">
        <li 
          v-for="feature in features" 
          :key="feature.name"
          :class="{ included: feature.premium }"
        >
          <span class="icon">{{ feature.premium ? '✓' : '×' }}</span>
          {{ feature.name }}
        </li>
      </ul>
      
      <div class="plan-footer">
        <p>Best for serious certification preparation</p>
        <button 
          @click.prevent="handleSubscribe" 
          class="subscribe-button"
          type="button"
        >
          Subscribe Now
        </button>
        <p v-if="error" class="error-message" role="alert">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing-table {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.plan {
  background: var(--white);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
}

.plan-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-header h3 {
  font-size: var(--font-size-xl);
  color: var(--text-color);
  margin-bottom: 1rem;
}

.price {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-color);
}

.period {
  color: var(--text-light);
}

.features {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.features li {
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-light);
}

.features li.included {
  color: var(--text-color);
}

.icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1rem;
}

.included .icon {
  background: rgba(6, 95, 70, 0.1);
  color: var(--success-color);
}

.plan-footer {
  margin-top: 2rem;
  text-align: center;
}

.plan-footer p {
  color: var(--text-light);
  margin-bottom: 1rem;
}

.subscribe-button {
  display: inline-block;
  background: var(--primary-color);
  border: none;
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
}

.subscribe-button:hover {
  background: var(--primary-hover);
}

.error-message {
  margin-top: 1rem;
  color: var(--error-color);
  font-size: 0.875rem;
  background-color: rgba(220, 38, 38, 0.1);
  padding: 0.5rem;
  border-radius: 0.375rem;
}

@media (max-width: 768px) {
  .pricing-table {
    grid-template-columns: 1fr;
  }
}
</style>