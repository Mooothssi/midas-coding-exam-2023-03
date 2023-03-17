/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 */

const DEFAULT_PRIME_LIST = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

function getLastDigit(number) {
  if (number > 9) {
    return getLastDigit(number % 10)
  }
  return number
}

function removeLastDigit(number) {
  return Math.floor((number - getLastDigit(number)) / 10)
}
/**
 * check three divisibility rule
 * @param {*} number
 * @param {*} sum
 * @returns
 */
function isDivisibleByThree(number, sum = 0) {
  let remainder = number % 10
  sum += remainder
  if (number > 9) {
    return isDivisibleByThree(Math.floor(number / 10), sum)
  }
  return sum % 3 === 0
}

/**
 * check seven divisibility rule
 * @param {*} number
 * @param {*} sum
 * @returns
 */
function isDivisibleBySeven(number) {
  const doubledLastDigit = getLastDigit(number) * 2
  const intermediate = removeLastDigit(number) - doubledLastDigit
  return intermediate % 7 === 0
}

function isDivisibleByThirteen(number) {
  const quadrupledLastDigit = getLastDigit(number) * 4
  const intermediate = removeLastDigit(number) + quadrupledLastDigit
  return intermediate % 13 === 0
}

function isDivisibleBy(divisor, number) {
  switch (divisor) {
    case 2:
      return getLastDigit(number) % 2 === 0
    case 3:
      return isDivisibleByThree(number)
    case 5:
      return getLastDigit(number) === 5 || getLastDigit(number) === 0
    case 7:
      return isDivisibleBySeven(number)
    case 11:
      return number % 11 === 0
    case 13:
      return isDivisibleByThirteen(number)
    default:
      return number % divisor === 0
  }
}

function isDivisibleByPrimes(number, primeList) {
  for (const prime of primeList) {
    if (isDivisibleBy(prime, number)) return true
  }
  return false
}

function isPrimeHeuristic(number, primeList) {
  if (number == 1) return false
  // single-digit primes checker
  if (primeList.includes(number)) return true
  // TODO: brute force by two-digit previous primes

  if (isDivisibleByPrimes(number, primeList)) {
    return false
  }
  for (let n = 31; n < number - 1; n++) {
    if (number % n === 0) {
      return true
    }
  }
  return true
}

// TODO: append new prime to list
function primeAt(ordinalLimit) {
  let targetPrime = 2,
    ordinalCounter = 0
  for (let i = 1; i <= Number.POSITIVE_INFINITY; i++) {
    if (isPrimeHeuristic(i, DEFAULT_PRIME_LIST)) {
      ordinalCounter++
      targetPrime = i
      if (ordinalLimit === ordinalCounter) break
    }
  }
  return targetPrime
}

module.exports = {
  primeAt,
}
