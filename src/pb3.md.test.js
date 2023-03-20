/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 18 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { primeAt } = require('./pb3')

describe('(3M) Problem 3: Test cases (medium numbers)', () => {
  test('3M.1. primeAt(2000) = 17389 ✅ (📖 x-ref from WolframAlpha)', () => {
    expect(primeAt(2000)).toBe(17389)
  })
  test('3M.2. primeAt(4000) = 37813 ✅ (📖 x-ref from WolframAlpha)', () => {
    expect(primeAt(4000)).toBe(37813)
  })
  test('3M.3. primeAt(6000) = 59359 ✅ (📖 x-ref from WolframAlpha)', () => {
    expect(primeAt(6000)).toBe(59359)
  })
  test('3M.4. primeAt(8000) = 81799 ✅ (📖 x-ref from WolframAlpha)', () => {
    expect(primeAt(8000)).toBe(81799)
  })
})
