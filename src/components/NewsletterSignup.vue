<script setup>
import { ref, onMounted } from 'vue';
import NewsletterBenefits from './NewsletterBenefits.vue';

const showSuccess = ref(false);
const isSubmitting = ref(false);
const email = ref('');
const formKey = ref(0);

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
  document.head.appendChild(script);
});

const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  
  isSubmitting.value = true;
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      showSuccess.value = true;
      email.value = '';
      formKey.value++; // Reset form
      
      // Track conversion
      if (window.gtag) {
        window.gtag('event', 'newsletter_signup', {
          'event_category': 'engagement',
          'event_label': 'Newsletter Subscription'
        });
      }
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="newsletter-container">
    <div class="newsletter-header">
      <h2>Join 500+ Accessibility & Inclusion Consultants</h2>
    </div>
    
    <NewsletterBenefits />
    
    <div v-if="showSuccess" class="success-message" role="alert">
      <h3>🎉 Welcome to Our Network!</h3>
      <p>Check your email to confirm your subscription and join our community of accessibility professionals.</p>
    </div>
    
    <form 
      v-else
      :key="formKey"
      @submit="handleSubmit"
      action="https://app.kit.com/forms/7407883/subscriptions" 
      class="seva-form formkit-form" 
      method="post" 
      data-sv-form="7407883" 
      data-uid="eb5a139bbf" 
      data-format="inline" 
      data-version="5"
    >
      <div class="form-content">
        <div class="formkit-field">
          <input 
            v-model="email"
            class="formkit-input" 
            name="email_address" 
            aria-label="Email Address" 
            placeholder="Enter your email address" 
            required 
            type="email"
          >
        </div>
        <button 
          data-element="submit" 
          class="formkit-submit"
          :disabled="isSubmitting"
        >
          <div class="formkit-spinner" v-if="isSubmitting">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span>{{ isSubmitting ? 'Joining...' : 'Stay Informed - Free!' }}</span>
        </button>
      </div>
      <div class="formkit-guarantee">
        <span class="lock-icon">🔒</span> Your email is safe with us. Unsubscribe anytime.
      </div>
    </form>
  </div>
</template>

<style scoped>
.newsletter-container {
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  background: var(--white);
  border-radius: 1rem;
  box-shadow: var(--shadow);
}

.newsletter-header {
  text-align: center;
  margin-bottom: 2rem;
}

.newsletter-header h2 {
  font-size: var(--font-size-xl);
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.newsletter-header p {
  color: var(--text-light);
  font-size: var(--font-size-lg);
}

.success-message {
  text-align: center;
  padding: 2rem;
  background-color: rgba(6, 95, 70, 0.1);
  border: 2px solid var(--success-color);
  border-radius: 0.5rem;
  margin: 2rem 0;
}

.success-message h3 {
  color: var(--success-color);
  font-size: var(--font-size-lg);
  margin-bottom: 0.5rem;
}

.success-message p {
  color: var(--text-color);
}

.form-content {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.formkit-field {
  flex: 1;
}

.formkit-input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: var(--font-size-base);
  border: 2px solid #e5e7eb;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.formkit-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: var(--focus-ring);
}

.formkit-submit {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  font-size: var(--font-size-base);
  font-weight: 600;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 180px;
}

.formkit-submit:not(:disabled):hover {
  background-color: var(--primary-hover);
}

.formkit-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.formkit-guarantee {
  text-align: center;
  color: var(--text-light);
  font-size: calc(var(--font-size-base) * 0.875);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.lock-icon {
  font-size: 0.875rem;
}

.formkit-spinner {
  display: flex;
  gap: 0.25rem;
}

.formkit-spinner > div {
  width: 6px;
  height: 6px;
  background-color: var(--white);
  border-radius: 50%;
  animation: formkit-bouncedelay 1.4s infinite ease-in-out both;
}

.formkit-spinner > div:nth-child(1) {
  animation-delay: -0.32s;
}

.formkit-spinner > div:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes formkit-bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@media (max-width: 640px) {
  .newsletter-container {
    margin: 2rem auto;
    padding: 1.5rem;
  }

  .form-content {
    flex-direction: column;
  }

  .formkit-submit {
    width: 100%;
    min-width: 0;
  }
}
</style>