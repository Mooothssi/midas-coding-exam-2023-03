/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { primeAt } = require('./pb3')

describe('(3L) Problem 3: Code Tests (large numbers)', () => {
  test('3L.1. primeAt(50000) = 611953 ✅ (X-Ref from WolframAlpha)', () => {
    expect(primeAt(50000)).toBe(611953)
  })

  test('3L.2. primeAt(1000000) = 15485863 ✅ (X-Ref from WolframAlpha)', () => {
    expect(primeAt(1000000)).toBe(15485863)
  })
  /**
   * TODO: Should use Prime Number Theorem / Chebyshev's Theorem if exceeding this line
   * lim x to +inf (π(x) / [x / ln(x)]) = 1
   */
  test('3L.3. primeAt(20000000) = 373587883 ✅ (X-Ref from WolframAlpha, failed)', () => {
    expect(primeAt(20000000)).toBe(373587883)
  })
})
