/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { getLastDigit, removeLastDigit } = require('./utils.base')
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
 * Checks whether the number is divisible by 5 using a Divisibility Rule Shorthand of 5
 * @param {Number} dividend the target dividend
 * @returns
 */

function isDivisibleByFive(dividend, sum = 0) {
  const lastDigit = getLastDigit(dividend)
  return lastDigit === 5 || lastDigit === 0
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

/**
 * TODO: Checks whether the number is divisible by 19 using a Divisibility Rule Shorthand of 19
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByNineteen(dividend, sum = 0) {
  const twoTimesLastDigit = getLastDigit(dividend) * 2
  const intermediate = removeLastDigit(dividend) + twoTimesLastDigit
  const remainder = intermediate % 19
  if (remainder !== 0 && remainder >= 18) {
    return isDivisibleByNineteen(intermediate)
  }
  return remainder % 19 === 0
}

/**
 * TODO: Checks whether the number is divisible by 19 using a Divisibility Rule Shorthand of 19
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByTwentyThree(dividend, sum = 0) {
  const sevenTimesLastDigit = getLastDigit(dividend) * 7
  const intermediate = removeLastDigit(dividend) + sevenTimesLastDigit
  const remainder = intermediate % 23
  if (remainder !== 0 && remainder >= 22) {
    return isDivisibleByTwentyThree(intermediate)
  }
  return remainder % 23 === 0
}

module.exports = {
  /**
   * Checks whether the number is even
   * @param {Number} number the target number
   * @returns
   */
  isEven(number) {
    return getLastDigit(number) % 2 === 0
  },

  /**
   * Checks whether the number is odd
   * @param {Number} number the target number
   * @returns
   */
  isOdd(number) {
    return !isEven(number)
  },
  isDivisibleByThree,
  isDivisibleByFive,
  isDivisibleBySeven,
  isDivisibleByEleven,
  isDivisibleByThirteen,
  isDivisibleBySeventeen,
  isDivisibleByNineteen,
  isDivisibleByTwentyThree,
}
