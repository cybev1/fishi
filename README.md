# Fishi.online Monorepo (complete base)
- Web: Next.js (apps/web) with Tailwind & Stripe-style floating cards
- API: NestJS (apps/api) with Dockerfile for Railway
- Packages: escrow, payments (stubs)

## Dev
pnpm i
pnpm dev

## Deploy
- Railway (API): Deploy with Dockerfile at apps/api/Dockerfile
- Vercel (Web): Root directory apps/web
- Env: NEXT_PUBLIC_API_URL=https://<railway-domain>
