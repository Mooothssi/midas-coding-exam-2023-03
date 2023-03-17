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
 * Checks whether the number is divisible by 3 using a Divisibility Rule Shorthand of 3 to improve calculation performance
 * @param {Number} dividend the target dividend
 * @returns
 */

function isDivisibleByThree(dividend, sum = 0) {
  let remainder = dividend % 10
  sum += remainder
  if (dividend > 9) {
    return isDivisibleByThree(Math.floor(dividend / 10), sum)
  }
  return sum % 3 === 0
}

/**
 * Checks whether the number is divisible by 7 using a Divisibility Rule Shorthand of 7 to improve performance
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleBySeven(dividend) {
  const doubledLastDigit = getLastDigit(dividend) * 2
  const intermediate = removeLastDigit(dividend) - doubledLastDigit
  const remainder = intermediate % 7
  if (remainder !== 0 && remainder >= 6) {
    return isDivisibleBySeven(intermediate)
  }
  return remainder % 7 === 0
}

/**
 * Checks whether the number is divisible by 11 using a Divisibility Rule Shorthand of 11
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByEleven(dividend) {
  let counter = 1
  const oddPlaces = []
  const evenPlaces = []
  let modifiableNum = dividend
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

/**
 * Checks whether the number is divisible by 13 using a Divisibility Rule Shorthand of 13
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByThirteen(number) {
  const quadrupledLastDigit = getLastDigit(number) * 4
  const intermediate = removeLastDigit(number) + quadrupledLastDigit
  const remainder = intermediate % 13
  if (remainder !== 0 && remainder >= 12) {
    return isDivisibleByThirteen(intermediate)
  }
  return remainder % 13 === 0
}

/**
 * Checks whether the number is divisible by 17 using a Divisibility Rule Shorthand of 17
 * (MANSAE, YEAH!)
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleBySeventeen(dividend) {
  const fiveTimesLastDigit = getLastDigit(dividend) * 5
  const intermediate = removeLastDigit(dividend) - fiveTimesLastDigit
  const remainder = intermediate % 17
  if (remainder !== 0 && remainder >= 16) {
    return isDivisibleBySeventeen(intermediate)
  }
  return remainder % 17 === 0
}

function isDivisibleBy(divisor, dividend) {
  switch (divisor) {
    case 2:
      return getLastDigit(dividend) % 2 === 0
    case 3:
      return isDivisibleByThree(dividend)
    case 5:
      const lastDigit = getLastDigit(dividend)
      return lastDigit === 5 || lastDigit === 0
    case 7:
      return isDivisibleBySeven(dividend)
    case 11:
      return isDivisibleByEleven(dividend)
    case 13:
      return isDivisibleByThirteen(dividend)
    case 17:
      return isDivisibleBySeventeen(dividend)
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
