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
} = require('./divisibility.1s')
const {
  isDivisibleByEleven,
  isDivisibleByThirteen,
  isDivisibleBySeventeen,
  isDivisibleByNineteen,
} = require('./divisibility.10s')
const { isDivisibleByTwentyThree } = require('./divisibility.20s')
module.exports = {
  isEven,
  isDivisibleByThree,
  isDivisibleByFive,
  isDivisibleBySeven,
  isDivisibleByEleven,
  isDivisibleByThirteen,
  isDivisibleBySeventeen,
  isDivisibleByNineteen,
  isDivisibleByTwentyThree,
}
