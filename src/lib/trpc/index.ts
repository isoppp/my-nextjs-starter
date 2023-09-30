/**
 * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which
 * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.
 *
 * We also create a few inference helpers for input and output types.
 */
import { httpBatchLink, loggerLink, TRPCLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'
import { observable } from '@trpc/server/observable'
import superjson from 'superjson'

import { type AppRouter } from '@/server/routers'

export const customLink: TRPCLink<AppRouter> = () => {
  return ({ next, op }) => {
    return observable((observer) => {
      // console.log('performing operation:', op)
      const unsubscribe = next(op).subscribe({
        next(value) {
          // console.log('we received value', value)
          observer.next(value)
        },
        error(err) {
          // console.log('we received error', err)
          observer.error(err)
          if (err?.data?.code === 'UNAUTHORIZED') {
            const win: Window = window
            win.location.href = win.location.origin + '/signin'
          }
        },
        complete() {
          observer.complete()
        },
      })
      return unsubscribe
    })
  }
}

/** A set of type-safe react-query hooks for your tRPC API. */
export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        customLink,
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `/api/trpc`,
          async headers() {
            return {}
            // const token = (await auth.currentUser?.getIdToken()) || ''
            // return token
            //   ? {
            //       authorization: `Bearer ${token}`,
            //     }
            //   : {}
          },
        }),
      ],
    }
  },
  /**
   * Whether tRPC should await queries when server rendering pages.
   *
   * @see https://trpc.io/docs/nextjs#ssr-boolean-default-false
   */
  ssr: false,
})

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>
