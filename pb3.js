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
  const remainder = intermediate % 7
  if (remainder !== 0 && remainder >= 6) {
    return isDivisibleBySeven(intermediate)
  }
  return remainder % 7 === 0
}

function isDivisibleByThirteen(number) {
  const quadrupledLastDigit = getLastDigit(number) * 4
  const intermediate = removeLastDigit(number) + quadrupledLastDigit
  const remainder = intermediate % 13
  if (remainder !== 0 && remainder >= 12) {
    return isDivisibleByThirteen(intermediate)
  }
  return remainder % 13 === 0
}

function isDivisibleByEleven(number) {
  let counter = 1
  const oddPlaces = []
  const evenPlaces = []
  let modifiableNum = number
  let remainder = 11
  while (modifiableNum >= 1) {
    remainder = modifiableNum % 10
    if (counter % 2 === 0) evenPlaces.push(remainder)
    else oddPlaces.push(remainder)
    counter++
    modifiableNum = Math.floor(modifiableNum / 10)
  }
  const diff = Math.abs(
    oddPlaces.reduce((a, b) => a + b, 0) -
      evenPlaces.reduce((a, b) => a + b, 0),
  )
  return diff == 0 || diff % 11 === 0
}

function isDivisibleBy(divisor, number) {
  switch (divisor) {
    case 2:
      return getLastDigit(number) % 2 === 0
    case 3:
      return isDivisibleByThree(number)
    case 5:
      const lastDigit = getLastDigit(number)
      return lastDigit === 5 || lastDigit === 0
    case 7:
      return isDivisibleBySeven(number)
    case 11:
      return isDivisibleByEleven(number)
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
