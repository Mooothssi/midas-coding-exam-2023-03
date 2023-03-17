/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const DEFAULT_PRIME_LIST = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
const { getLastDigit } = require('./utils.base')
const {
  isEven,
  isDivisibleByThree,
  isDivisibleByFive,
  isDivisibleBySeven,
  isDivisibleByEleven,
  isDivisibleBySeventeen,
  isDivisibleByThirteen,
  isDivisibleByNineteen
} = require('./utils.divisibility')

function isDivisibleBy(divisor, dividend) {
  switch (divisor) {
    case 2:
      return isEven(dividend)
    case 3:
      return isDivisibleByThree(dividend)
    case 5:
      return isDivisibleByFive(dividend)
    case 7:
      return isDivisibleBySeven(dividend)
    case 11:
      return isDivisibleByEleven(dividend)
    case 13:
      return isDivisibleByThirteen(dividend)
    case 17:
      return isDivisibleBySeventeen(dividend)
    case 19:
      return isDivisibleByNineteen(dividend)
    default:
      return dividend % divisor === 0
  }
}

function isDivisibleByPrimes(dividend, primeList) {
  for (const prime of primeList) {
    if (isDivisibleBy(prime, dividend)) return true
  }
  return false
}

function isPrimeHeuristic(dividend, primeList) {
  if (dividend == 1) return false
  if (primeList.includes(dividend)) return true
  if (isDivisibleByPrimes(dividend, primeList)) {
    return false
  }
  for (let n = 31; n < dividend - 1; n++) {
    if (dividend % n === 0) {
      return true
    }
  }
  return true
}
// TODO: should store previous `primeList` to `DEFAULT_PRIME_LIST`, read from serialized prime in file
function primeAt(ordinalLimit) {
  let targetPrime = 2,
    ordinalCounter = 0
  const primeList = [...DEFAULT_PRIME_LIST]
  for (let i = 1; i <= +Infinity; i++) {
    if (isPrimeHeuristic(i, primeList)) {
      ordinalCounter++
      targetPrime = i
      if (targetPrime > Math.max(...primeList)) {
        primeList.push(targetPrime)
      }
      if (ordinalLimit === ordinalCounter) break
    }
  }
  return targetPrime
}

module.exports = {
  primeAt,
}
