const { getLastDigit, removeLastDigit } = require('../base')
const fs = require('fs')

function readPrimeDivAdjustments(filename = 'pb3.primes_div_adj.txt') {
  if (!fs.statSync(filename)) return null
  return new Map(
    fs
      .readFileSync(filename, { encoding: 'utf8' })
      .toString()
      .split('\n')
      .map((x) => {
        const [first, second] = x.trim().split(' ')
        return [parseInt(first), parseInt(second)]
      }),
  )
}

const PRIME_DIV_ADJUSTMENTS = readPrimeDivAdjustments()

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
