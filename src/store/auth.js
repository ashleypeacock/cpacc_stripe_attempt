import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from './quiz'
import { logoutMessage } from '../router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(false)
  const isAdmin = ref(false)
  const emailVerified = ref(true) // Always true for testing
  const router = useRouter()

  const isAuthenticated = computed(() => !!user.value)

  async function initialize() {
    // Check local storage for test user
    const testUser = localStorage.getItem('test_user')
    if (testUser) {
      user.value = JSON.parse(testUser)
    }
  }

  async function register({ email, password }) {
    loading.value = true
    try {
      // Create test user
      const testUser = {
        id: 'test-user-' + Date.now(),
        email,
        created_at: new Date().toISOString()
      }
      user.value = testUser
      localStorage.setItem('test_user', JSON.stringify(testUser))
      return { user: testUser }
    } finally {
      loading.value = false
    }
  }

  async function login({ email, password }) {
    loading.value = true
    try {
      // Simulate login
      const testUser = {
        id: 'test-user-' + Date.now(),
        email,
        created_at: new Date().toISOString()
      }
      user.value = testUser
      localStorage.setItem('test_user', JSON.stringify(testUser))
      return { user: testUser }
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    try {
      user.value = null
      isAdmin.value = false
      localStorage.removeItem('test_user')
      const quizStore = useQuizStore()
      quizStore.resetQuiz()
      logoutMessage.value = 'You\'ve been logged out'
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  return {
    user,
    loading,
    isAuthenticated,
    emailVerified,
    isAdmin,
    initialize,
    register,
    login,
    logout
  }
})