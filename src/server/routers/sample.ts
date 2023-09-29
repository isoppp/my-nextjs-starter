import { createTRPCRouter, publicProcedure } from '@/server'

export const sampleRouter = createTRPCRouter({
  getSamples: publicProcedure.query(async ({ ctx }) => {
    const records = await ctx.prisma.test.findMany()
    return {
      data: {
        records,
      },
    }
  }),
})
