/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { getLastDigit, removeLastDigit } = require('./base')
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
}
