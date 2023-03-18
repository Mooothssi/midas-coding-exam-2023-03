/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 – 18 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { primeAt } = require('./pb3')

describe('(3L) Problem 3: Code test cases (large numbers)', () => {
  test('3L.1. primeAt(10000) = 104729 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(10000)).toBe(104729)
  })
  test('3L.2. primeAt(50000) = 611953 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(50000)).toBe(611953)
  })
  test('3L.3. primeAt(100000) = 1299709 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(100000)).toBe(1299709)
  })
  test('3L.4. primeAt(200000) = 2750159 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(200000)).toBe(2750159)
  })
  test('3L.5. primeAt(300000) = 4256233 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(300000)).toBe(4256233)
  })
  test('3L.6. primeAt(400000) = 5800079 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(400000)).toBe(5800079)
  })
  test('3L.7. primeAt(500000) = 7368787 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(500000)).toBe(7368787)
  })
})
