/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */
const { isEven, isDivisibleByFive, isDivisibleByThree } = require('./1s')
const { handleWithDigitAdjustments } = require('./base')

function isDivisibleBy(divisor, dividend) {
  switch (divisor) {
    case 2:
      return isEven(dividend)
    case 3:
      return isDivisibleByThree(dividend)
    case 5:
      return isDivisibleByFive(dividend)
    default:
      if (handleWithDigitAdjustments(dividend, divisor)) return true
      return dividend % divisor === 0
  }
}

module.exports = {
  isDivisibleBy,
}
