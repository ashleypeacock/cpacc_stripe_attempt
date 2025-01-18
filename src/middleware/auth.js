import { useAuthStore } from '../store/auth'
import { useSubscriptionStore } from '../store/subscription'
import { checkSubscriptionAccess } from '../lib/supabase'

export async function requireAuth(to, from, next) {
  const authStore = useAuthStore()
  
  if (!authStore.isAuthenticated) {
    next({ 
      path: '/', 
      query: { 
        redirect: to.fullPath,
        message: 'Please sign in to continue'
      }
    })
    return
  }

  if (!authStore.emailVerified) {
    next({ 
      path: '/',
      query: { 
        message: 'Please verify your email to continue'
      }
    })
    return
  }

  next()
}

export async function requireSubscription(to, from, next) {
  const authStore = useAuthStore()
  const subscriptionStore = useSubscriptionStore()

  if (!authStore.isAuthenticated) {
    next({ 
      path: '/',
      query: { 
        redirect: to.fullPath,
        message: 'Please sign in to access this feature'
      }
    })
    return
  }

  const { hasAccess } = await checkSubscriptionAccess(authStore.user.id)
  if (!hasAccess) {
    next({ 
      path: '/subscription',
      query: { 
        message: 'Please upgrade to access this feature'
      }
    })
    return
  }

  next()
}