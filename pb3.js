/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const DEFAULT_PRIME_LIST = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
const { isDivisibleBy } = require('./utils/divisibility')

function isDivisibleByPrimes(dividend, primeList) {
  for (const prime of primeList) {
    if (isDivisibleBy(prime, dividend)) return true
  }
  return false
}

function isPrime(num, primeList, maxPrime = 0) {
  if (maxPrime === 0) maxPrime = Math.max(...primeList)
  if (num == 1) return false
  if (primeList.includes(num)) return true
  if (isDivisibleByPrimes(num, primeList)) {
    return false
  }
  // Brute-force the number. Cannot factorize greater than the number itself squared.
  for (let n = maxPrime; n < Math.sqrt(num); n++) {
    if (num % n === 0) {
      return true
    }
  }
  return true
}
// TODO: should store previous `primeList` to `DEFAULT_PRIME_LIST`, read from serialized prime in file
function primeAt(ordinalLimit) {
  let targetPrime = 2
  let ordinalCounter = 0
  let maxPrime = 2
  const primeList = [...DEFAULT_PRIME_LIST]
  maxPrime = Math.max(...primeList)
  for (let i = 1; i <= +Infinity; i++) {
    if (isPrime(i, primeList, maxPrime)) {
      ordinalCounter++
      targetPrime = i
      if (targetPrime > maxPrime) {
        primeList.push(targetPrime)
        maxPrime = targetPrime
      }
      if (ordinalLimit === ordinalCounter) break
    }
  }
  return targetPrime
}

module.exports = {
  primeAt,
}
