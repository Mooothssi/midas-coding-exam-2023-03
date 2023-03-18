/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 – 18 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { primeAt } = require('./pb3')

describe('(3L) Problem 3: Code Tests (large numbers)', () => {
  test('3L.1. primeAt(10000) = 104729 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(10000)).toBe(104729)
  })
  test('3L.2. primeAt(50000) = 611953 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(50000)).toBe(611953)
  })
  test('3L.3. primeAt(100000) = 1299709 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(100000)).toBe(1299709)
  })
})
