/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */
const { manipulateDigitToIntermediate } = require('./base')
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
function isDivisibleByThirteen(dividend) {
  return manipulateDigitToIntermediate(dividend, +4, 13)
}

/**
 * Checks whether the number is divisible by 17 using a Divisibility Rule Shorthand of 17
 * (MANSAE, YEAH!)
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleBySeventeen(dividend) {
  return manipulateDigitToIntermediate(dividend, -5, 17)
}

/**
 * Checks whether the number is divisible by 19 using a Divisibility Rule Shorthand of 19
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByNineteen(dividend) {
  return manipulateDigitToIntermediate(dividend, +2, 19)
}
module.exports = {
  isDivisibleByEleven,
  isDivisibleByThirteen,
  isDivisibleBySeventeen,
  isDivisibleByNineteen,
}
