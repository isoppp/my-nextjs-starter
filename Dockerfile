FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
# https://pnpm.io/ja/cli/fetch
RUN yarn global add pnpm

COPY .npmrc package.json pnpm-lock.yaml ./
RUN pnpm i --prod --frozen-lockfile --no-optional --ignore-scripts

# Install Prisma Client - remove if not using Prisma
COPY prisma ./
RUN pnpm prisma generate

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV production
ENV SKIP_ENV_VALIDATION 1
ENV NEXT_TELEMETRY_DISABLED 1
ARG COMMIT_HASH

# My env
ARG COMMIT_HASH
ARG DATABASE_URL
# end --- My env

RUN yarn global add pnpm
RUN pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV SKIP_ENV_VALIDATION 0
ENV NEXT_TELEMETRY_DISABLED 1
ENV NPM_CONFIG_UPDATE_NOTIFIER false
ARG COMMIT_HASH
ENV COMMIT_HASH ${COMMIT_HASH}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs

EXPOSE 3000
ENV PORT 3000

#HEALTHCHECK --interval=60s --timeout=30s --start-period=180s --retries=5 CMD wget -nv -t1 --spider 'http://127.0.0.1/api/health-check' || exit 1

CMD ["npm", "run", "start-by-docker"]


