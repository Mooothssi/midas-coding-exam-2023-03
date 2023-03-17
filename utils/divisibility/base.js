const { getLastDigit, removeLastDigit } = require("../base")

function manipulateDigitToIntermediate(dividend, multiplier, divisor) {
  const multiplierTimesLastDigit = getLastDigit(dividend) * multiplier
  const intermediate = removeLastDigit(dividend) + multiplierTimesLastDigit
  const remainder = intermediate % divisor
  if (remainder !== 0 && remainder >= divisor - 1) {
    return manipulateDigitToIntermediate(intermediate)
  }
  return remainder % divisor === 0
}

module.exports = {
    manipulateDigitToIntermediate
}
