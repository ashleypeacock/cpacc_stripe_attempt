import { buffer } from 'micro';

export async function verifyStripeWebhook(req, res, next) {
  const sig = req.headers['stripe-signature'];
  if (!sig) {
    return res.status(400).json({ error: 'No Stripe signature found' });
  }

  try {
    const rawBody = await buffer(req);
    req.rawBody = rawBody;
    next();
  } catch (error) {
    console.error('Stripe webhook middleware error:', error);
    res.status(400).json({ error: 'Invalid webhook payload' });
  }
}