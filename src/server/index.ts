import { initTRPC, TRPCError } from '@trpc/server'
import { type CreateNextContextOptions } from '@trpc/server/adapters/next'
import { nanoid } from 'nanoid'
import { NextApiRequest } from 'next'
import superjson from 'superjson'
import { ZodError } from 'zod'

import { env } from '@/env.mjs'
import { logger } from '@/lib/logger'
import { prisma } from '@/lib/prisma'

const getUserByReq = async (req: CreateNextContextOptions['req']) => {
  const authorization = req.headers.authorization
  if (authorization?.split(' ')[0] === 'Bearer' && !!authorization?.split(' ')[1]) {
    try {
      // const token = authorization?.split(' ')[1]
      // const decoded = await verifyToken(token)
      // const { uid } = decoded
      // return await prisma.user.findUnique({ where: { idpId: uid } })
      return null
    } catch {
      return null
    }
  }
}

const createInnerTRPCContext = async (opt: {
  user: Awaited<ReturnType<typeof getUserByReq>>
  requestId: string
  req?: NextApiRequest
}) => {
  return {
    prisma,
    user: opt.user,
    requestId: opt.requestId,
    headerAuthorization: opt?.req?.headers.authorization,
  }
}

export const createTRPCContext = async ({ req }: CreateNextContextOptions) => {
  const user = await getUserByReq(req)
  return createInnerTRPCContext({
    user,
    requestId: nanoid(),
    req,
  })
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
  isDev: env.NODE_ENV === 'development',
})

const loggerMiddleware = t.middleware(async (opts) => {
  const start = Date.now()

  const result = await opts.next()
  const durationMs = Date.now() - start

  logger.info({
    ok: result.ok,
    reqId: opts.ctx.requestId,
    path: opts.path,
    type: opts.type,
    start,
    durationMs,
  })
  return result
})

/** Reusable middleware that enforces users are logged in before running the procedure. */
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  })
})

const updateRecentAccessedAt = t.middleware(({ ctx, next }) => {
  // if (ctx.user && dayjs().isAfter(dayjs(ctx.user.recentAccessedAt).add(1, 'hour'))) {
  //   prisma.user.update({
  //     where: { id: ctx.user.id },
  //     data: {
  //       recentAccessedAt: new Date(),
  //     },
  //   })
  // }
  return next({ ctx })
})

export const createTRPCRouter = t.router

export const publicProcedure = t.procedure.use(loggerMiddleware)

export const protectedProcedure = t.procedure.use(loggerMiddleware).use(updateRecentAccessedAt).use(enforceUserIsAuthed)
