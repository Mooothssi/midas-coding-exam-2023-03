/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { manipulateDigitToIntermediate } = require("./base")

/**
 * Checks whether the number is divisible by 23 using a Divisibility Rule Shorthand of 23
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByTwentyThree(dividend) {
  return manipulateDigitToIntermediate(dividend, +7, 23)
}

/**
 * Checks whether the number is divisible by 29 using a Divisibility Rule Shorthand of 29
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByTwentyNine(dividend) {
  return manipulateDigitToIntermediate(dividend, +3, 29)
}

module.exports = { isDivisibleByTwentyThree, isDivisibleByTwentyNine }
