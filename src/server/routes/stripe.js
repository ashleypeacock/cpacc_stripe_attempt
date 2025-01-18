import express from 'express';
import { requireAuth } from '../middleware/auth';
import { verifyStripeWebhook } from '../middleware/stripe';
import { createCheckoutSession, createPortalSession } from '../stripe-api';
import { handleStripeWebhook } from '../stripe-webhook';

const router = express.Router();

// Protected routes
router.post('/create-checkout-session', requireAuth, createCheckoutSession);
router.post('/create-portal-session', requireAuth, createPortalSession);

// Webhook route
router.post('/webhook', verifyStripeWebhook, handleStripeWebhook);

export default router;