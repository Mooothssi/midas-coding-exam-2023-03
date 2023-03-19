/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 – 18 Mar 2023
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
  // test('3S.5. primeAt(555) = 4019 ✅ (📖 x-ref from WolframAlpha)', () => {
  //   expect(primeAt(555)).toBe(4019)
  // })
  // test('3S.6. primeAt(666) = 4973 ✅ (📖 x-ref from WolframAlpha)', () => {
  //   expect(primeAt(666)).toBe(4973)
  // })
  // test('3S.7. primeAt(1000) = 7919 ✅ (📖 x-ref from WolframAlpha)', () => {
  //   expect(primeAt(1000)).toBe(7919)
  // })
})
