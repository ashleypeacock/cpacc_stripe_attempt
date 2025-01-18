import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

export function getStripe() {
  if (!stripePromise) {
    const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    console.log('Initializing Stripe with key:', key ? 'Key exists' : 'No key found'); // Debug log
    if (!key) {
      throw new Error('Stripe publishable key is missing');
    }
    stripePromise = loadStripe(key);
  }
  return stripePromise;
}

export async function createSubscription({ priceId, successUrl, cancelUrl }) {
  console.log('Creating subscription with:', { priceId, successUrl, cancelUrl }); // Debug log
  
  try {
    const stripe = await getStripe();
    if (!stripe) {
      console.error('Failed to initialize Stripe'); // Debug log
      throw new Error('Failed to initialize Stripe');
    }

    console.log('Creating checkout session...'); // Debug log
    const session = await stripe.redirectToCheckout({
      mode: 'subscription',
      lineItems: [{
        price: priceId,
        quantity: 1
      }],
      successUrl,
      cancelUrl
    });

    if (session.error) {
      console.error('Checkout session error:', session.error); // Debug log
      throw session.error;
    }

    console.log('Checkout session created:', session); // Debug log
  } catch (error) {
    console.error('Error creating subscription:', error); // Debug log
    throw error;
  }
}