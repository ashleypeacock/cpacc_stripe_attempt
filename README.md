# CPACC Quiz App

A Vue.js application for CPACC certification practice tests with Stripe subscription integration.

## Prerequisites

- Node.js 18+
- npm 9+
- A Stripe account
- A Supabase account
- A Netlify account

## Local Development Setup

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SITE_URL=http://localhost:5173
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

3. Start the development server:
```bash
npm run dev
```

## Supabase Setup

1. Create a new Supabase project
2. Go to Project Settings > API to get your project URL and anon key
3. Execute the database migrations in `supabase/migrations/`
4. Set up Row Level Security (RLS) policies as defined in the migrations

## Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard > Developers > API keys
3. Create a subscription product:
   - Go to Products > Add Product
   - Set name: "CPACC Quiz Premium"
   - Add yearly price: $49
   - Save the price ID for later use
4. Set up webhooks:
   - Go to Developers > Webhooks
   - Add endpoint: `https://your-netlify-site/.netlify/functions/stripe-webhook`
   - Select events:
     - `checkout.session.completed`
     - `customer.subscription.deleted`
   - Get the webhook signing secret

## Netlify Deployment

1. Create a new site from Git:
   ```bash
   npm install -g netlify-cli
   netlify init
   ```

2. Set up environment variables in Netlify:
   - Go to Site settings > Build & deploy > Environment
   - Add the following variables:
     ```
     VITE_SUPABASE_URL
     VITE_SUPABASE_ANON_KEY
     VITE_SITE_URL
     VITE_STRIPE_PUBLISHABLE_KEY
     STRIPE_SECRET_KEY
     STRIPE_WEBHOOK_SECRET
     SUPABASE_SERVICE_ROLE_KEY
     ```

3. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

4. Set up Netlify Functions:
   - Ensure `netlify.toml` exists with proper configuration
   - Functions will be automatically deployed

## Testing Stripe Integration

1. Use Stripe test cards:
   - Success: 4242 4242 4242 4242
   - Decline: 4000 0000 0000 0002

2. Test webhook events:
   ```bash
   stripe listen --forward-to localhost:8888/.netlify/functions/stripe-webhook
   ```


## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

