/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */
const { getLastDigit, removeLastDigit } = require('../base')
/**
 * Checks whether the number is divisible by 23 using a Divisibility Rule Shorthand of 23
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByTwentyThree(dividend) {
  const sevenTimesLastDigit = getLastDigit(dividend) * 7
  const intermediate = removeLastDigit(dividend) + sevenTimesLastDigit
  const remainder = intermediate % 23
  if (remainder !== 0 && remainder >= 22) {
    return isDivisibleByTwentyThree(intermediate)
  }
  return remainder % 23 === 0
}

/**
 * Checks whether the number is divisible by 29 using a Divisibility Rule Shorthand of 29
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByTwentyNine(dividend) {
  const thriceLastDigit = getLastDigit(dividend) * 3
  const intermediate = removeLastDigit(dividend) + thriceLastDigit
  const remainder = intermediate % 29
  if (remainder !== 0 && remainder >= 28) {
    return isDivisibleByTwentyNine(intermediate)
  }
  return remainder % 29 === 0
}

module.exports = { isDivisibleByTwentyThree, isDivisibleByTwentyNine }
