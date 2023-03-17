/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 * 
 * In response to Midas Developer Test (2023-03)
 */

const { primeAt } = require('./pb3')

describe('(1) Problem 3: Code Tests (small numbers)', () => {
  test('1.1. primeAt(1) = 2 ✅', () => {
    expect(primeAt(1)).toBe(2)
  })

  test('1.2. primeAt(2) = 3 ✅', () => {
    expect(primeAt(2)).toBe(3)
  })

  test('1.3. primeAt(6) = 13 ✅', () => {
    expect(primeAt(6)).toBe(13)
  })
  test('1.4. primeAt(100) = 541 ✅', () => {
    expect(primeAt(100)).toBe(541)
  })

  test('1.5. primeAt(2000) = 17389 ✅ (X-Ref from WolframAlpha)', () => {
    expect(primeAt(2000)).toBe(17389)
  })
})

describe('(2) Problem 3: Code Tests (large numbers)', () => {
  test('2.1. primeAt(50000) = 611953 ✅ (X-Ref from WolframAlpha)', () => {
    expect(primeAt(50000)).toBe(611953)
  })

  test('2.2. primeAt(1000000) = 15485863 ✅ (X-Ref from WolframAlpha)', () => {
    expect(primeAt(1000000)).toBe(15485863)
  })
  /**
   * TODO: Should use Prime Number Theorem / Chebyshev's Theorem if exceeding this line
   * lim x to +inf (π(x) / [x / ln(x)]) = 1
   */
  test('2.3. primeAt(20000000) = 373587883 ❌ (X-Ref from WolframAlpha, failed)', () => {
    expect(primeAt(20000000)).toBe(373587883)
  })
})
