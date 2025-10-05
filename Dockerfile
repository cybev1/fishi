# Root Dockerfile that builds & runs ONLY the API (apps/api)
FROM node:18-alpine AS base
WORKDIR /app
# pnpm
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
# bring the whole monorepo in
COPY . .
# install once for the workspace
RUN pnpm i --frozen-lockfile
# build just the API workspace
RUN pnpm --filter @fishi/api build

# ---- Runtime image ----
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=4000
# copy built API and node_modules hoisted deps
COPY --from=base /app/apps/api/dist ./apps/api/dist
COPY --from=base /app/apps/api/package.json ./apps/api/package.json
COPY --from=base /app/node_modules ./node_modules
EXPOSE 4000
CMD ["node", "apps/api/dist/main.js"]
