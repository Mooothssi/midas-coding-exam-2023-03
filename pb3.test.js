/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 */
const { primeAt } = require('./pb3')

test('primeAt(1) = 2', () => {
  expect(primeAt(1)).toBe(2)
})

test('primeAt(2) = 3', () => {
  expect(primeAt(2)).toBe(3)
})

test('primeAt(6) = 13', () => {
  expect(primeAt(6)).toBe(13)
})

test('primeAt(100) = 541', () => {
  expect(primeAt(100)).toBe(541)
})

test('primeAt(100) = 541', () => {
  expect(primeAt(100)).toBe(541)
})

// test('primeAt(2000) = ?', () => {
//   expect(primeAt(2000)).toBe('?')
// })

// test('primeAt(50000) = ?', () => {
//   expect(primeAt(50000)).toBe('?')
// })

// test('primeAt(1000000) = ?', () => {
//   expect(primeAt(1000000)).toBe('?')
// })

// test('primeAt(20000000) = ?', () => {
//   expect(primeAt(20000000)).toBe('?')
// })
