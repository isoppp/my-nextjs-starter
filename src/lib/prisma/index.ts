import { PrismaClient } from '@prisma/client'
import { PrismaClientOptions } from '@prisma/client/runtime/library'

import { env } from '@/env.mjs'

const globalForPrisma = globalThis as unknown as {
  prisma: MyPrismaClient | undefined
}

class MyPrismaClient extends PrismaClient {
  constructor(args) {
    super({
      ...args,
    })
    ;(this as PrismaClient<PrismaClientOptions, 'warn' | 'error' | 'query'>).$on('query', (e) => {
      // console.log('Query: ' + e.query)
      console.log('Query took: ' + e.duration + 'ms')
    })
  }
}

export const prisma =
  globalForPrisma.prisma ??
  new MyPrismaClient({
    log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
