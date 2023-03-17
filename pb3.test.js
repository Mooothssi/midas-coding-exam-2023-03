/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 */
const { primeAt } = require('./pb3')

test('1. primeAt(1) = 2 ✅', () => {
  expect(primeAt(1)).toBe(2)
})

test('2. primeAt(2) = 3 ✅', () => {
  expect(primeAt(2)).toBe(3)
})

test('3. primeAt(6) = 13 ✅', () => {
  expect(primeAt(6)).toBe(13)
})

test('4. primeAt(100) = 541 ✅', () => {
  expect(primeAt(100)).toBe(541)
})

test('5. primeAt(2000) = 17389 ✅ (X-Ref from WolframAlpha)', () => {
  expect(primeAt(2000)).toBe(17389)
})
/**
 * TODO: Should use Prime number theorem / Chebyshev's theorem
 * lim x to +inf (π(x) / [x / ln(x)]) = 1
 */
test('6. primeAt(50000) = 611953 ✅ (X-Ref from WolframAlpha)', () => {
  expect(primeAt(50000)).toBe(611953)
})

test('7. primeAt(1000000) = 15485863 ✅ (X-Ref from WolframAlpha)', () => {
  expect(primeAt(1000000)).toBe(15485863)
})

test('8. primeAt(20000000) = 373587883 ✅ (X-Ref from WolframAlpha)', () => {
  expect(primeAt(20000000)).toBe(373587883)
})
