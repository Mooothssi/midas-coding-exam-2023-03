/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 – 18 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { primeAt } = require('./pb3')

describe('(3L) Problem 3: Test cases (large numbers)', () => {
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
  test('3L.8. primeAt(600000) = 8960453 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(600000)).toBe(8960453)
  })
  test('3L.9. primeAt(700000) = 10570841 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(700000)).toBe(10570841)
  })
  test('3L.10. primeAt(800000) = 12195257 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(800000)).toBe(12195257)
  })
  test('3L.11. primeAt(900000) = 13834103 ✅ (📖 x-ref: WolframAlpha)', () => {
    expect(primeAt(900000)).toBe(13834103)
  })
})
