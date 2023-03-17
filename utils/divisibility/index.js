/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */
const {
  isEven,
  isDivisibleByThree,
  isDivisibleByFive,
  isDivisibleBySeven,
} = require('./1s')
const {
  isDivisibleByEleven,
  isDivisibleByThirteen,
  isDivisibleBySeventeen,
  isDivisibleByNineteen,
} = require('./10s')
const { isDivisibleByTwentyThree, isDivisibleByTwentyNine } = require('./20s')
const { isDivisibleByThirtyOne, isDivisibleByThirtySeven } = require('./30s')

function isDivisibleBy(divisor, dividend) {
  switch (divisor) {
    case 2:
      return isEven(dividend)
    case 3:
      return isDivisibleByThree(dividend)
    case 5:
      return isDivisibleByFive(dividend)
    case 7:
      return isDivisibleBySeven(dividend)
    case 11:
      return isDivisibleByEleven(dividend)
    case 13:
      return isDivisibleByThirteen(dividend)
    case 17:
      return isDivisibleBySeventeen(dividend)
    case 19:
      return isDivisibleByNineteen(dividend)
    case 23:
      return isDivisibleByTwentyThree(dividend)
    case 29:
      return isDivisibleByTwentyNine(dividend)
    case 31:
      return isDivisibleByThirtyOne(dividend)
    case 37:
      return isDivisibleByThirtySeven(dividend)
    default:
      return dividend % divisor === 0
  }
}

module.exports = {
  isDivisibleBy
}
