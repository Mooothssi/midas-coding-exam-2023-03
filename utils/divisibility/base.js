const { getLastDigit, removeLastDigit } = require('../base')

const DIV_ADJUSTMENTS = new Map([
  [7, -2],
  [13, +4],
  [17, -5],
  [19, +2],
  [23, +7],
  [29, +3],
  [31, -3],
  [37, -11],
  [41, -4],
  [43, +13],
  [47, -14],
])

function handleWithDigitAdjustments(dividend, divisor) {
  let multiplier = 0
  if (DIV_ADJUSTMENTS.has(divisor)) multiplier = DIV_ADJUSTMENTS.get(divisor)
  else return false
  const multiplierTimesLastDigit = getLastDigit(dividend) * multiplier
  const intermediate = removeLastDigit(dividend) + multiplierTimesLastDigit
  const remainder = intermediate % divisor
  if (remainder !== 0 && remainder >= divisor - 1) {
    return handleWithDigitAdjustments(intermediate, divisor)
  }
  return remainder % divisor === 0
}

module.exports = {
  handleWithDigitAdjustments,
}
