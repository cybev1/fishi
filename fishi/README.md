# Fishi.online Monorepo (MVP scaffold)

This is a minimal, working scaffold for the Fishi.online marketplace:
- **apps/web** – Next.js (App Router) web app
- **apps/api** – NestJS API (Fastify) with health endpoint
- **apps/mobile** – Expo (React Native) minimal tabs
- **packages/ui** – shared UI components (React)
- **packages/schema** – Prisma schema + Zod types (placeholder)
- **packages/escrow** – escrow state machine (TypeScript)
- **packages/payments** – Paystack/Flutterwave adapters (stubs)

## Quick start
```bash
pnpm i
pnpm dev
```
- Web: http://localhost:3000
- API: http://localhost:4000/health
- Mobile: `pnpm --filter @fishi/mobile dev` (Expo)

> Next steps:
> 1) Wire DB (Railway Postgres) and Redis.
> 2) Implement auth + roles.
> 3) Add listings, store, escrow routes.
