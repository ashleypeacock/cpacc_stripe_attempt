import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { createSubscription } from '../lib/stripe'
import { useAuthStore } from './auth'

export const useSubscriptionStore = defineStore('subscription', () => {
  const subscription = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const authStore = useAuthStore()

  const isSubscribed = computed(() => {
    return subscription.value?.status === 'active'
  })

  async function fetchSubscriptionStatus() {
    console.log('Fetching subscription status'); // Debug log
    subscription.value = null
    return subscription.value
  }

  async function subscribe({ priceId, successUrl, cancelUrl }) {
    console.log('Subscribe called with:', { priceId, successUrl, cancelUrl }); // Debug log
    
    if (!authStore.isAuthenticated) {
      console.error('User not authenticated'); // Debug log
      throw new Error('Please sign in to subscribe')
    }

    if (!priceId) {
      console.error('Missing priceId'); // Debug log
      throw new Error('Price ID is required')
    }

    loading.value = true
    error.value = null

    try {
      console.log('Creating subscription...'); // Debug log
      await createSubscription({
        priceId,
        successUrl,
        cancelUrl
      })
      console.log('Subscription created successfully'); // Debug log
    } catch (err) {
      console.error('Subscription creation failed:', err); // Debug log
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    subscription,
    loading,
    error,
    isSubscribed,
    fetchSubscriptionStatus,
    subscribe
  }
})