# Fishi.online — Starter Monorepo

This is a minimal scaffold to get you live on **Vercel (web)** and **Railway (api)**.

## Apps
- `apps/web` — Next.js (App Router), Tailwind, TypeScript
- `apps/api` — NestJS + Prisma + Postgres

## Quickstart (dev)
```bash
# API
cd apps/api
cp .env.example .env
npm i
npx prisma generate
npm run start:dev

# WEB
cd ../../apps/web
cp .env.example .env
npm i
npm run dev
```
