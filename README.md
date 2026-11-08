# The Chosen Beatz & Music

Next.js storefront for discovering and licensing original music production.

## Local development
- Node.js 20 or 22
- npm install
- npm run dev
- npm run build

## Current features
- Responsive storefront and beat catalogue
- Search by title, genre and mood; genre filters
- Client-side demo cart
- Licensing information and contact links
- Baseline security response headers

## Before accepting real orders
The catalogue contains demonstration listings and indicative ZAR prices. Audio previews, licence PDFs, customer accounts, database persistence, payment processing, webhooks and protected downloads are not active. Configure and test PostgreSQL, authentication, Stripe Checkout/webhooks and private object storage before enabling sales. Never expose secret keys in browser code.

## Vercel
Use the repository root as the project root, Next.js as the framework preset, and npm install / npm run build. Add only environment variables for services you have configured.
