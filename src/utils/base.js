/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

function getLastDigit(number) {
  if (number > 9) {
    return getLastDigit(number % 10)
  }
  return number
}

module.exports = {
  getLastDigit,
  removeLastDigit(number) {
    return Math.floor((number - getLastDigit(number)) / 10)
  },
}
