/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */
const { getLastDigit, removeLastDigit } = require('../base')

/**
 * Checks whether the number is divisible by 31 using a Divisibility Rule Shorthand of 31
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByThirtyOne(dividend) {
  const thriceLastDigit = getLastDigit(dividend) * 3
  const intermediate = removeLastDigit(dividend) - thriceLastDigit
  const remainder = intermediate % 31
  if (remainder !== 0 && remainder >= 30) {
    return isDivisibleByThirtyOne(intermediate)
  }
  return remainder % 31 === 0
}

/**
 * Checks whether the number is divisible by 37 using a Divisibility Rule Shorthand of 37
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByThirtySeven(dividend) {
  const elevenTimesLastDigit = getLastDigit(dividend) * 11
  const intermediate = removeLastDigit(dividend) - elevenTimesLastDigit
  const remainder = intermediate % 37
  if (remainder !== 0 && remainder >= 36) {
    return isDivisibleByThirtySeven(intermediate)
  }
  return remainder % 37 === 0
}

module.exports = { isDivisibleByThirtyOne, isDivisibleByThirtySeven }
