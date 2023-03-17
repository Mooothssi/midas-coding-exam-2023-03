/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */
const { getLastDigit, removeLastDigit } = require('./base')
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
 * Checks whether the number is divisible by 19 using a Divisibility Rule Shorthand of 19
 *
 * @param {Number} dividend the target dividend
 * @returns
 */
function isDivisibleByNineteen(dividend) {
  const twoTimesLastDigit = getLastDigit(dividend) * 2
  const intermediate = removeLastDigit(dividend) + twoTimesLastDigit
  const remainder = intermediate % 19
  if (remainder !== 0 && remainder >= 18) {
    return isDivisibleByNineteen(intermediate)
  }
  return remainder % 19 === 0
}
module.exports = {
  isDivisibleByEleven,
  isDivisibleByThirteen,
  isDivisibleBySeventeen,
  isDivisibleByNineteen,
}
