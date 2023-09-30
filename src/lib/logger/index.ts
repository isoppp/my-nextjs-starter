import pino from 'pino'

import { env } from '@/env.mjs'

export const logger = pino({
  enabled: env.NODE_ENV !== 'test',
  level: 'info',
  // transport: {
  //   target: 'pino/file',
  //   options: {
  //     destination: 'logs/out.log',
  //     mkdir: true
  //   }
  // }
})
