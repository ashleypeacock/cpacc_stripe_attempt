import axios from 'axios'

const API_KEY = import.meta.env.VITE_CONVERTKIT_API_KEY
const API_SECRET = import.meta.env.VITE_CONVERTKIT_API_SECRET
const FORM_ID = '7407883' // Using the form ID from your existing implementation

export async function subscribeToNewsletter(email, { firstName = '', marketingConsent = false } = {}) {
  if (!marketingConsent) return

  try {
    await axios.post(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      api_key: API_KEY,
      email,
      first_name: firstName,
      fields: {
        marketing_consent: marketingConsent
      }
    })
  } catch (error) {
    console.error('ConvertKit subscription error:', error)
    throw error
  }
}