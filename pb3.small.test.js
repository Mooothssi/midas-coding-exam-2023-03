/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { primeAt } = require('./pb3')

describe('(3S) Problem 3: Code Tests (small numbers)', () => {
  test('3S.1. primeAt(1) = 2 ✅', () => {
    expect(primeAt(1)).toBe(2)
  })

  test('3S.2. primeAt(2) = 3 ✅', () => {
    expect(primeAt(2)).toBe(3)
  })

  test('3S.3. primeAt(6) = 13 ✅', () => {
    expect(primeAt(6)).toBe(13)
  })
  test('3S.4. primeAt(100) = 541 ✅', () => {
    expect(primeAt(100)).toBe(541)
  })

  test('3S.5. primeAt(2000) = 17389 ✅ (X-Ref from WolframAlpha)', () => {
    expect(primeAt(2000)).toBe(17389)
  })
})
