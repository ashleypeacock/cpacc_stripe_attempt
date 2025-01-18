<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import ErrorMessage from './ErrorMessage.vue'

const emit = defineEmits(['close'])
const authStore = useAuthStore()
const email = ref('')
const loading = ref(false)
const error = ref('')
const success = ref(false)

async function handleSubmit() {
  if (!email.value) {
    error.value = 'Please enter your email address'
    return
  }

  loading.value = true
  error.value = ''

  try {
    await authStore.forgotPassword(email.value)
    success.value = true
    email.value = ''
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div 
      class="modal-content" 
      role="dialog" 
      aria-labelledby="forgot-password-title"
    >
      <button 
        class="close-button" 
        @click="$emit('close')" 
        aria-label="Close"
      >×</button>

      <h2 id="forgot-password-title">Reset Password</h2>

      <div v-if="success" class="success-message" role="alert">
        <h3>✉️ Check Your Email</h3>
        <p>We've sent password reset instructions to your email address.</p>
        <p class="spam-note">Don't see it? Check your spam folder.</p>
        <p class="wait-note">Please wait a few minutes before requesting another reset email.</p>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="forgot-form">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            :disabled="loading"
            autocomplete="email"
            aria-required="true"
            :aria-invalid="!!error"
          >
        </div>

        <div v-if="error" class="error-message" role="alert">
          <ErrorMessage :error="error" />
        </div>

        <button 
          type="submit" 
          class="submit-button"
          :disabled="loading"
        >
          {{ loading ? 'Sending...' : 'Send Reset Instructions' }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
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
  z-index: 1000;
}

.modal-content {
  background: var(--white);
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 400px;
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
  text-align: center;
}

.forgot-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  color: var(--text-color);
  font-weight: 500;
}

input {
  padding: 0.75rem;
  border: 2px solid var(--text-light);
  border-radius: 0.375rem;
  font-size: var(--font-size-base);
}

.success-message {
  color: var(--success-color);
  text-align: center;
  padding: 1.25rem;
  background-color: var(--success-bg);
  border-radius: 0.375rem;
  border: 2px solid var(--success-color);
}

.success-message h3 {
  color: var(--success-color);
  margin-bottom: 1rem;
  font-size: var(--font-size-lg);
}

.success-message p {
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.spam-note,
.wait-note {
  color: var(--text-light);
  font-size: 0.875rem;
}

.submit-button {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.75rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--primary-hover);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

input:focus,
.submit-button:focus,
.close-button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}
</style>