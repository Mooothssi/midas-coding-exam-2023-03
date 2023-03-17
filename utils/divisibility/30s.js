/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { manipulateDigitToIntermediate } = require('./base')

/**
 * Checks whether the number is divisible by 31 using a Divisibility Rule Shorthand of 31
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByThirtyOne(dividend) {
  return manipulateDigitToIntermediate(dividend, -3, 31)
}

/**
 * Checks whether the number is divisible by 37 using a Divisibility Rule Shorthand of 37
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByThirtySeven(dividend) {
  return manipulateDigitToIntermediate(dividend, -11, 37)
}

module.exports = { isDivisibleByThirtyOne, isDivisibleByThirtySeven }
