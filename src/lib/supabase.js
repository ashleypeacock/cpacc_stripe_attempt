import { createClient } from '@supabase/supabase-js'
import { logError, logInfo } from '../utils/logger'
import { validatePassword, validateEmail, checkRateLimit } from '../utils/security'
import { SITE_URL } from '../config/site'
import { ref } from 'vue'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration')
}

export const connectionStatus = ref({
  success: true,
  message: null
})

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
})

export async function testConnection() {
  try {
    const { error } = await supabase.from('user_profiles').select('id').limit(1)
    
    if (error) {
      connectionStatus.value = {
        success: false,
        message: 'Unable to connect to the server. Please check your internet connection.'
      }
      throw error
    }

    connectionStatus.value = {
      success: true,
      message: null
    }

    return true
  } catch (error) {
    logError('Connection test failed', error)
    return false
  }
}

export async function signOut() {
  try {
    // Get current session first
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      // If no session exists, return success without trying to sign out
      return { success: true }
    }

    const { error } = await supabase.auth.signOut({
      scope: 'local' // Only clear local session data
    })

    if (error) {
      throw error
    }

    // Clear any stored session data
    localStorage.removeItem('supabase.auth.token')
    sessionStorage.removeItem('supabase.auth.token')

    return { success: true }
  } catch (error) {
    logError('Failed to sign out', error)
    // Don't throw the error, just return failure
    return { success: false, error: error.message }
  }
}

export async function signUp({ email, password, marketingConsent }) {
  const emailValidation = validateEmail(email)
  if (!emailValidation.isValid) {
    throw new Error(emailValidation.errors[0])
  }

  const passwordValidation = validatePassword(password)
  if (!passwordValidation.isValid) {
    throw new Error(passwordValidation.errors[0])
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${SITE_URL}/auth/callback`,
      data: {
        marketing_consent: marketingConsent
      }
    }
  })

  if (error) {
    logError('Registration failed', error)
    throw error
  }

  // Update user profile
  const { error: profileError } = await supabase
    .from('user_profiles')
    .update({ marketing_consent: marketingConsent })
    .eq('id', data.user.id)

  if (profileError) {
    logError('Failed to update user profile', profileError)
  }

  return {
    user: data.user,
    message: 'Please check your email to verify your account.'
  }
}

export async function signIn({ email, password }) {
  const rateLimit = checkRateLimit(email)
  if (!rateLimit.allowed) {
    throw new Error(`Too many login attempts. Please try again in ${rateLimit.timeRemaining} minutes.`)
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    throw error
  }

  // Check email verification
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('email_verified')
    .eq('id', data.user.id)
    .single()

  if (!profile?.email_verified) {
    throw new Error('Please verify your email before signing in.')
  }

  return data
}

export async function verifyEmail(token) {
  const { error } = await supabase.auth.verifyOtp({
    token_hash: token,
    type: 'email'
  })

  if (error) {
    throw error
  }

  // Update user profile
  const { user } = await supabase.auth.getUser()
  if (user) {
    await supabase
      .from('user_profiles')
      .update({ email_verified: true })
      .eq('id', user.id)
  }

  return { message: 'Email verified successfully!' }
}

export async function resendVerificationEmail(email) {
  try {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
      options: {
        emailRedirectTo: `${SITE_URL}/auth/callback`
      }
    })

    if (error) {
      throw error
    }

    return {
      success: true,
      message: 'Verification email has been resent. Please check your inbox.'
    }
  } catch (error) {
    logError('Failed to resend verification email', error)
    throw error
  }
}

export async function resetPassword(email) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${SITE_URL}/reset-password`
    })

    if (error) {
      throw error
    }

    return {
      success: true,
      message: 'Password reset instructions have been sent to your email.'
    }
  } catch (error) {
    logError('Failed to send password reset email', error)
    throw error
  }
}

export async function updatePassword(newPassword) {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    })

    if (error) {
      throw error
    }

    return {
      success: true,
      message: 'Password has been updated successfully.'
    }
  } catch (error) {
    logError('Failed to update password', error)
    throw error
  }
}

export async function getSubscriptionTiers() {
  const { data, error } = await supabase
    .from('subscription_tiers')
    .select('*')
    .order('price_monthly')

  if (error) {
    throw error
  }

  return data
}

export async function getUserSubscription(userId) {
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*, subscription_tiers(*)')
    .eq('user_id', userId)
    .single()

  if (error && error.code !== 'PGRST116') {
    throw error
  }

  return data
}

export async function checkSubscriptionAccess(userId) {
  const subscription = await getUserSubscription(userId)
  return {
    hasAccess: subscription?.status === 'active',
    subscription
  }
}

export async function recordQuestionAttempt(userId, questionId, isCorrect) {
  try {
    const { data, error } = await supabase
      .from('question_attempts')
      .insert([
        {
          user_id: userId,
          question_id: questionId,
          correct: isCorrect
        }
      ])

    if (error) {
      throw error
    }

    return { success: true, data }
  } catch (error) {
    logError('Failed to record question attempt', error)
    return { success: false, error }
  }
}

export async function getMasteryStats(userId) {
  try {
    const { data, error } = await supabase
      .from('user_mastery_stats')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error) {
      throw error
    }

    return {
      mastered_questions: data?.mastered_questions || 0,
      attempted_questions: data?.attempted_questions || 0
    }
  } catch (error) {
    logError('Failed to get mastery stats', error)
    return {
      mastered_questions: 0,
      attempted_questions: 0
    }
  }
}

export async function getQuizProgress(userId) {
  try {
    const { data, error } = await supabase
      .from('quiz_progress')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error && error.code !== 'PGRST116') {
      throw error
    }

    return data || {
      questions_completed: 0,
      total_attempts: 0,
      correct_answers: 0
    }
  } catch (error) {
    logError('Failed to get quiz progress', error)
    return {
      questions_completed: 0,
      total_attempts: 0,
      correct_answers: 0
    }
  }
}