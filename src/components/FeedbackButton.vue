<script setup>
import { ref } from 'vue';
import axios from 'axios';

const WEB3FORMS_API_KEY = '6e6f24fd-f282-4220-b43b-c34d483f6dc0';
const showModal = ref(false);
const feedbackType = ref('bug'); // 'bug' or 'feedback'
const message = ref('');
const email = ref('');
const loading = ref(false);
const submitted = ref(false);
const error = ref('');

async function handleSubmit() {
  if (!message.value) {
    error.value = 'Please enter a message';
    return;
  }
  
  loading.value = true;
  error.value = '';

  const formData = {
    apikey: WEB3FORMS_API_KEY,
    subject: `${feedbackType.value === 'bug' ? 'Bug Report' : 'Feedback'} - CPACC Quiz App`,
    from_name: email.value || 'Anonymous User',
    message: `
Type: ${feedbackType.value}
Message: ${message.value}
User Email: ${email.value || 'Not provided'}
Page: ${window.location.href}
User Agent: ${navigator.userAgent}
    `.trim(),
    to_email: 'ashley@openexploration.co.uk'
  };

  try {
    await axios.post('https://api.web3forms.com/submit', formData);

    submitted.value = true;
    message.value = '';
    email.value = '';
    
    // Close modal after 3 seconds
    setTimeout(() => {
      showModal.value = false;
      submitted.value = false;
    }, 3000);
  } catch (e) {
    error.value = 'Failed to send feedback. Please try again or email ashley@openexploration.co.uk directly';
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="feedback-container">
    <button 
      @click="showModal = true"
      class="feedback-button"
      aria-label="Open feedback form"
    >
      <span class="feedback-icon">💬</span>
      Feedback
    </button>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div 
        class="modal-content" 
        role="dialog" 
        aria-labelledby="feedback-title"
        aria-modal="true"
      >
        <button 
          class="close-button" 
          @click="showModal = false"
          aria-label="Close feedback form"
        >×</button>

        <h2 id="feedback-title">Send Feedback</h2>

        <div v-if="submitted" class="success-message" role="alert">
          Thank you for your feedback! We'll review it soon.
        </div>

        <form v-else @submit.prevent="handleSubmit" class="feedback-form">
          <div class="form-group">
            <label>Type:</label>
            <div class="type-buttons">
              <button 
                type="button"
                :class="['type-button', feedbackType === 'bug' ? 'active' : '']"
                @click="feedbackType = 'bug'"
              >
                🐛 Report Bug
              </button>
              <button 
                type="button"
                :class="['type-button', feedbackType === 'feedback' ? 'active' : '']"
                @click="feedbackType = 'feedback'"
              >
                💡 Suggestion
              </button>
            </div>
          </div>

          <div class="form-group">
            <label for="feedback-message">Message:</label>
            <textarea
              id="feedback-message"
              v-model="message"
              rows="4"
              :placeholder="feedbackType === 'bug' ? 'Describe the issue...' : 'Share your suggestion...'"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="feedback-email">Email (optional):</label>
            <input
              id="feedback-email"
              type="email"
              v-model="email"
              placeholder="For follow-up questions"
            >
          </div>

          <div v-if="error" class="error-message" role="alert">
            {{ error }}
          </div>

          <button 
            type="submit" 
            class="submit-button"
            :disabled="loading"
          >
            {{ loading ? 'Sending...' : 'Send Feedback' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feedback-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.feedback-button {
  background: var(--primary-color);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

.feedback-button:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.feedback-icon {
  font-size: 1.25rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.modal-content {
  background: var(--white);
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 500px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-light);
}

h2 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.feedback-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.type-buttons {
  display: flex;
  gap: 1rem;
}

.type-button {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid var(--text-light);
  border-radius: 0.375rem;
  background: var(--white);
  cursor: pointer;
  transition: all 0.2s ease;
}

.type-button.active {
  border-color: var(--primary-color);
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
}

textarea,
input {
  padding: 0.75rem;
  border: 2px solid var(--text-light);
  border-radius: 0.375rem;
  font-size: var(--font-size-base);
  font-family: inherit;
}

textarea:focus,
input:focus,
.type-button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

.submit-button {
  background: var(--primary-color);
  color: var(--white);
  padding: 0.75rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover:not(:disabled) {
  background: var(--primary-hover);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: var(--error-color);
  font-size: 0.875rem;
  padding: 0.5rem;
  background-color: rgba(153, 27, 27, 0.1);
  border-radius: 0.375rem;
}

.success-message {
  color: var(--success-color);
  text-align: center;
  padding: 1rem;
  background-color: rgba(6, 95, 70, 0.1);
  border-radius: 0.375rem;
}

@media (max-width: 768px) {
  .feedback-container {
    bottom: 1rem;
    right: 1rem;
  }

  .feedback-button {
    padding: 0.5rem 1rem;
  }

  .modal-content {
    padding: 1.5rem;
    margin: 1rem;
  }

  .type-buttons {
    flex-direction: column;
  }
}
</style>