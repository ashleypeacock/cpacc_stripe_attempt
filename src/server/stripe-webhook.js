import Stripe from 'stripe';
import { supabase } from '../lib/supabase';
import { sendEmail } from './email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function handleStripeWebhook(req, res) {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'customer.subscription.created':
        await handleSubscriptionCreated(event.data.object);
        break;
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object);
        break;
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object);
        break;
      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object);
        break;
      case 'invoice.upcoming':
        await handleUpcomingInvoice(event.data.object);
        break;
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Error processing webhook:', err);
    res.status(500).send('Webhook processing failed');
  }
}

async function handleSubscriptionCreated(subscription) {
  const { data: user } = await supabase
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', subscription.id)
    .single();

  if (!user) {
    console.error('User not found for subscription:', subscription.id);
    return;
  }

  await supabase.from('subscription_history').insert({
    subscription_id: subscription.id,
    event_type: 'created',
    details: subscription
  });

  await sendEmail({
    to: user.email,
    subject: 'Welcome to Premium Access!',
    template: 'subscription-welcome',
    data: {
      endDate: new Date(subscription.current_period_end * 1000).toLocaleDateString()
    }
  });
}

async function handleSubscriptionUpdated(subscription) {
  const { data: user } = await supabase
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', subscription.id)
    .single();

  if (!user) return;

  await supabase
    .from('subscriptions')
    .update({
      status: subscription.status,
      current_period_start: new Date(subscription.current_period_start * 1000),
      current_period_end: new Date(subscription.current_period_end * 1000),
      cancel_at: subscription.cancel_at ? new Date(subscription.cancel_at * 1000) : null
    })
    .eq('stripe_subscription_id', subscription.id);

  await supabase.from('subscription_history').insert({
    subscription_id: subscription.id,
    event_type: 'updated',
    details: subscription
  });
}

async function handleSubscriptionDeleted(subscription) {
  const { data: user } = await supabase
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', subscription.id)
    .single();

  if (!user) return;

  await supabase
    .from('subscriptions')
    .update({
      status: 'canceled',
      cancel_at: new Date()
    })
    .eq('stripe_subscription_id', subscription.id);

  await supabase.from('subscription_history').insert({
    subscription_id: subscription.id,
    event_type: 'deleted',
    details: subscription
  });

  await sendEmail({
    to: user.email,
    subject: 'Subscription Canceled',
    template: 'subscription-canceled',
    data: {
      resubscribeUrl: `${process.env.VITE_SITE_URL}/subscription`
    }
  });
}

async function handlePaymentFailed(invoice) {
  const { data: user } = await supabase
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', invoice.subscription)
    .single();

  if (!user) return;

  await sendEmail({
    to: user.email,
    subject: 'Payment Failed',
    template: 'payment-failed',
    data: {
      amount: (invoice.amount_due / 100).toFixed(2),
      updatePaymentUrl: `${process.env.VITE_SITE_URL}/subscription`
    }
  });
}

async function handleUpcomingInvoice(invoice) {
  const { data: user } = await supabase
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', invoice.subscription)
    .single();

  if (!user) return;

  await sendEmail({
    to: user.email,
    subject: 'Subscription Renewal Reminder',
    template: 'subscription-renewal',
    data: {
      amount: (invoice.amount_due / 100).toFixed(2),
      dueDate: new Date(invoice.due_date * 1000).toLocaleDateString(),
      updatePaymentUrl: `${process.env.VITE_SITE_URL}/subscription`
    }
  });
}