<script setup>
import { ref, computed, nextTick } from 'vue'
import { useAuthStore } from '../store/auth'
import ErrorMessage from './ErrorMessage.vue'
import { onMounted } from 'vue'
import { validatePassword, validateEmail } from '../utils/security'
import ForgotPasswordModal from './ForgotPasswordModal.vue'

const props = defineProps({
  mode: {
    type: String,
    default: 'register', // or 'login'
    validator: value => ['register', 'login'].includes(value)
  }
})

const emit = defineEmits(['close'])

const authStore = useAuthStore()
const mode = ref(props.mode)
const email = ref('')
const password = ref('')
const passwordStrength = ref(0)
const passwordErrors = ref([])
const emailErrors = ref([])
const marketingConsent = ref(false)
const showForgotPasswordModal = ref(false)
const loading = ref(false)
const error = ref('')
const showResendVerification = ref(false)

const showConfirmationMessage = ref(false)
const confirmationEmail = ref('')
const verificationSent = ref(false) // Keep only one declaration
const rememberEmail = ref(true) // Keep only one declaration

const title = computed(() => 
  mode.value === 'register' ? 'Create Account to Continue' : 'Sign In'
)

const buttonText = computed(() => mode.value === 'register' ? 'Sign Up' : 'Sign In')

// Load remembered email if available
onMounted(() => {
  const savedEmail = localStorage.getItem('rememberedEmail')
  if (savedEmail) {
    email.value = savedEmail
  }
})

const strengthColor = computed(() => {
  if (passwordStrength.value >= 80) return '#059669'
  if (passwordStrength.value >= 60) return '#0284c7'
  if (passwordStrength.value >= 40) return '#d97706'
  return '#dc2626'
})

const strengthLabel = computed(() => {
  if (passwordStrength.value >= 80) return 'Strong'
  if (passwordStrength.value >= 60) return 'Good'
  if (passwordStrength.value >= 40) return 'Fair'
  return 'Weak'
})

const handleClose = () => {
  emit('close')
}

function validateEmailInput() {
  const validation = validateEmail(email.value)
  emailErrors.value = validation.errors
  return validation.isValid
}

async function handleResendVerification() {
  if (!email.value) {
    error.value = 'Please enter your email address'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const { message } = await authStore.resendVerification(email.value)
    error.value = ''
    showResendVerification.value = true
  } catch (e) {
    error.value = e.message || 'Failed to resend verification email. Please try again.'
    showResendVerification.value = false
  } finally {
    loading.value = false
  }
}

function checkPasswordStrength() {
  const validation = validatePassword(password.value)
  passwordErrors.value = validation.errors
  passwordStrength.value = validation.strength
  return validation.isValid
}

async function handleSubmit() {
  if (!email.value || !password.value) {
    error.value = 'Please fill in all fields'
    return
  }
  
  // Validate email
  if (!validateEmailInput()) {
    error.value = emailErrors.value[0]
    return
  }

  // Validate password strength
  if (!checkPasswordStrength()) {
    error.value = passwordErrors.value[0]
    return
  }

  loading.value = true
  error.value = ''

  try {
    if (mode.value === 'register') {
      // Clear any existing error before attempting registration
      error.value = ''
      
      const { message } = await authStore.register({
        email: email.value,
        password: password.value,
        marketingConsent: marketingConsent.value
      })
      
      showConfirmationMessage.value = true
      verificationSent.value = true
      confirmationEmail.value = email.value
      
      // Save email if remember is checked
      if (rememberEmail.value) {
        localStorage.setItem('rememberedEmail', email.value)
      }
      
      error.value = ''
      
      // Show resend verification option after 30 seconds
      setTimeout(() => {
        if (showConfirmationMessage.value) {
          showResendVerification.value = true;
        }
      }, 30000)
      
      return
    }

    await authStore.login({
      email: email.value,
      password: password.value
    })

    emit('close')
  } catch (e) {
    // Handle specific error cases
    if (e.message?.includes('user_already_exists')) {
      error.value = 'An account with this email already exists. Please sign in instead.';
      // Focus the error message for screen readers
      nextTick(() => {
        document.querySelector('.error-message')?.focus()
      });
      // Switch to login mode after a short delay
      setTimeout(() => {
        mode.value = 'login';
        error.value = '';
      }, 3000);
    } else if (e.message?.includes('Email not confirmed')) {
      verificationSent.value = true
      error.value = 'Please confirm your email address before signing in. Check your inbox for the confirmation link.';
      showResendVerification.value = true;
    } else {
      error.value = e.message;
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content" role="dialog" :aria-label="title">
      <button class="close-button" @click="handleClose" aria-label="Close">×</button>
      
      <h2>{{ title }}</h2>
      
      <div v-if="error" class="error-message" role="alert">
        <ErrorMessage :error="error" />
      </div>
      
      <div v-if="showConfirmationMessage" class="confirmation-message" role="alert">
        <div class="confirmation-content">
          <h3>✉️ Check Your Email</h3>
          <p>We've sent a verification link to:</p>
          <p class="email-highlight">{{ confirmationEmail }}</p>
          <p class="instruction-text">Click the link in your email to verify your address and activate your account.</p>
          <p class="spam-note">Don't see it? Check your spam folder.</p>
          
          <p>Still can't find the email?</p>
          <button 
            type="button"
            class="resend-button"
            @click="handleResendVerification"
            :disabled="loading"
          >
            Resend Verification Email
          </button>
        </div>
        <div class="divider">
          <span>OR</span>
        </div>
        <button 
          type="button"
          class="forgot-link"
          @click="handleForgotPassword"
          :disabled="loading"
        >
          Forgot Password if already registered
        </button>
      </div>

      
      <form v-if="!showConfirmationMessage" @submit.prevent="handleSubmit" class="auth-form">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            v-model="email"
            @input="validateEmailInput"
            :aria-invalid="!!error"
            type="email"
            required
            aria-required="true"
            autocomplete="email"
            :disabled="loading"
            placeholder="Enter your email address"
          >
          <div v-if="emailErrors.length > 0" class="input-error" role="alert">
            {{ emailErrors[0] }}
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            @input="checkPasswordStrength"
            type="password"
            :aria-invalid="!!error"
            aria-required="true"
            required
            autocomplete="current-password"
            aria-describedby="password-requirements password-strength"
            :disabled="loading"
            placeholder="Enter your password"
          >
          <div 
            v-if="mode === 'register' && password"
            class="password-strength"
            id="password-strength"
            role="status"
          >
            <div class="strength-bar">
              <div 
                class="strength-fill"
                :style="{ 
                  width: `${passwordStrength}%`,
                  backgroundColor: strengthColor
                }"
              ></div>
            </div>
            <span class="strength-label" :style="{ color: strengthColor }">
              {{ strengthLabel }}
            </span>
          </div>
          <div v-if="passwordErrors.length > 0" class="input-error" role="alert">
            {{ passwordErrors[0] }}
          </div>
        </div>
        
        <div class="form-group checkbox-group">
          <input
            id="remember-email"
            v-model="rememberEmail"
            type="checkbox"
            :disabled="loading"
          >
          <label for="remember-email" class="checkbox-label">
            Remember my email
          </label>
        </div>

        <div v-if="mode === 'login'" class="forgot-password">
          <button 
            type="button"
            class="forgot-link"
            @click="showForgotPasswordModal = true"
            :disabled="loading"
          >
            Forgot Password?
          </button>
        </div>

        <div v-if="mode === 'register'" class="form-group checkbox-group">
          <input
            id="marketing-consent"
            v-model="marketingConsent"
            type="checkbox"
            :disabled="loading"
            aria-describedby="consent-description"
          >
          <label for="marketing-consent" class="consent-label" id="consent-description">
            Send me product updates and learning resources
          </label>
        </div>
        
        <div v-if="showResendVerification" class="resend-verification">
          <p>Haven't received the verification email?</p>
          <button 
            type="button"
            class="resend-button"
            @click="handleResendVerification"
            :disabled="loading"
          >
            Resend Verification Email
          </button>
        </div>

        <button 
          type="submit" 
          class="submit-button"
          :disabled="loading"
        >
          <span v-if="loading">Please wait...</span>
          <span v-else>{{ buttonText }}</span>
        </button>
      </form>

      <ForgotPasswordModal
        v-if="showForgotPasswordModal"
        @close="showForgotPasswordModal = false"
      />
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

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.checkbox-group {
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
}

label {
  color: var(--text-color);
  font-weight: 500;
}

.consent-label {
  font-size: 0.875rem;
  color: var(--text-light);
  font-weight: normal;
  line-height: 1.4;
}

.forgot-password {
  text-align: right;
}

.forgot-link {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0.25rem;
  text-decoration: underline;
}

.forgot-link:hover {
  color: var(--primary-hover);
}

.forgot-link:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

.resend-verification {
  text-align: center;
  margin-top: 1rem;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem 0;
  color: var(--text-light);
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--text-light);
}

.divider span {
  padding: 0 1rem;
  font-size: 0.875rem;
}

.forgot-link {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0.25rem;
  text-decoration: underline;
}

.forgot-link:hover {
  color: var(--primary-hover);
}

.forgot-link:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

.resend-verification p {
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

.resend-button {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0.25rem;
  text-decoration: underline;
}

.resend-button:hover {
  color: var(--primary-hover);
}

.resend-button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

.success-message {
  color: var(--success-color);
  text-align: center;
  padding: 1.25rem;
  background-color: var(--success-bg);
  border-radius: 0.375rem;
  margin-top: 1rem;
  border: 2px solid var(--success-color);
  font-weight: 500;
}

input[type="email"],
input[type="password"] {
  padding: 0.75rem;
  border: 2px solid var(--text-light);
  border-radius: 0.375rem;
  font-size: var(--font-size-base);
}

input[type="checkbox"] {
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.25rem;
}

.error-message {
  color: var(--error-color);
  font-size: 0.875rem;
  padding: 1rem;
  background-color: rgba(220, 38, 38, 0.1);
  border-radius: 0.375rem;
  border: 1px solid var(--error-color);
  margin-bottom: 1.5rem;
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

.info-message {
  text-align: center;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  font-size: calc(var(--font-size-base) * 0.9375);
  line-height: 1.5;
}

.confirmation-message {
  background-color: var(--success-bg);
  border: 1px solid var(--success-color);
  color: var(--success-color);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.confirmation-content {
  color: var(--text-color);
}

.email-highlight {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--success-color);
  margin: 1rem 0;
  word-break: break-all;
}

.instruction-text {
  margin-bottom: 0.5rem;
}

.spam-note {
  color: var(--text-light);
  font-size: 0.875rem;
  margin-top: 1rem;
}

.resend-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(6, 95, 70, 0.2);
}

.password-requirements {
  font-size: 0.875rem;
  color: var(--text-light);
  margin-top: 0.25rem;
}

.consent-description {
  font-size: 0.75rem;
  color: var(--text-light);
  display: block;
  margin-top: 0.25rem;
}
.confirmation-message h3 {
  color: var(--success-color);
  margin-bottom: 1rem;
  font-size: var(--font-size-lg);
}

.confirmation-message p {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

input:focus,
.submit-button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}
</style>