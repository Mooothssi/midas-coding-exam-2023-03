const { getLastDigit, removeLastDigit } = require('../base')

const PRIME_DIV_ADJUSTMENTS = new Map([
  [3, -2],
  [7, -2],
  [11, -1],
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
  [53, +16],
  [59, +6],
  [61, -6],
  [67, -20],
  [71, -7],
  [73, +22],
  [79, +8],
  [83, +25],
  [89, +9],
  [97, -29],
  [101, -10],
  [103, +31],
  [107, -32],
  [109, +11],
  [113, +34],
])

function handleWithDigitAdjustments(dividend, divisor) {
  let multiplier = 0
  if (PRIME_DIV_ADJUSTMENTS.has(divisor))
    multiplier = PRIME_DIV_ADJUSTMENTS.get(divisor)
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
