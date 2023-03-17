/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 – 18 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { primeAt } = require('./pb3')

describe('(3L) Problem 3: Code Tests (large numbers)', () => {
  test('3L.1. primeAt(50000) = 611953 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(50000)).toBe(611953)
  })
})
