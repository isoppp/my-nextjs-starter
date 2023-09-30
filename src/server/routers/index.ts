import { createTRPCRouter } from '@/server'
import { sampleRouter } from '@/server/routers/sample'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  sample: sampleRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
