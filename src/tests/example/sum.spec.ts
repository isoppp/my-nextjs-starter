import { describe, expect, it } from 'vitest'

import { sum } from './sum'

describe.concurrent('foo', () => {
  it('bar', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
