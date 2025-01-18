<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabase'

const router = useRouter()

onMounted(async () => {
  try {
    // Get the current session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()

    if (sessionError) {
      throw new Error(sessionError.message || 'Failed to verify email')
    }

    if (session) {
      // Update email verification status
      const authStore = useAuthStore()
      authStore.emailVerified = true

      // Redirect to home page with success message
      router.push({
        path: '/',
        query: { 
          message: 'Email verified successfully! You can now sign in.',
          verified: 'true'
        }
      })
    } else {
      throw new Error('Email verification failed. Please try again or request a new verification link.')
    }

  } catch (error) {
    console.error('Error in auth callback:', error)
    router.push({
      path: '/',
      query: { 
        error: error.message || 'Failed to verify email. Please try again or request a new verification link.' 
      }
    })
  }
})
</script>

<template>
  <div class="callback-container">
    <div class="loading-message" role="alert">
      <span class="loading-icon">⌛</span>
      <p>Verifying your email... Please wait.</p>
    </div>
  </div>
</template>

<style scoped>
.callback-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 2rem;
}

.loading-message {
  text-align: center;
  color: var(--text-color);
  background: var(--white);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}

.loading-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>