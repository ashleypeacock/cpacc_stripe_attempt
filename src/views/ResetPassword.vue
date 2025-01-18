<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const newPassword = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref(false)
const loading = ref(false)

async function handleSubmit() {
  if (newPassword.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }

  if (newPassword.value.length < 6) {
    error.value = 'Password must be at least 6 characters'
    return
  }

  loading.value = true
  error.value = ''

  try {
    await authStore.changePassword(newPassword.value)
    success.value = true
    setTimeout(() => {
      router.push('/')
    }, 3000)
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="reset-container">
    <div class="reset-card">
      <h2>Reset Password</h2>
      
      <div v-if="success" class="success-message" role="alert">
        Password updated successfully! Redirecting to home page...
      </div>
      
      <form v-else @submit.prevent="handleSubmit" class="reset-form">
        <div class="form-group">
          <label for="new-password">New Password</label>
          <input
            id="new-password"
            v-model="newPassword"
            type="password"
            required
            :disabled="loading"
            placeholder="Enter new password"
          >
        </div>

        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            v-model="confirmPassword"
            type="password"
            required
            :disabled="loading"
            placeholder="Confirm new password"
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
          {{ loading ? 'Updating...' : 'Update Password' }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.reset-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.reset-card {
  background: var(--white);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.reset-form {
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

input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: var(--focus-ring);
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

.submit-button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}
</style>