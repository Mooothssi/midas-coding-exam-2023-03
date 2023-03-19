const { isDivisibleBy } = require('./divisibility')
const { heavyIteratePrimes } = require('./prime.worker.heavy')
const { Worker } = require('node:worker_threads')
const path = require('path')

function isDivisibleByPrimes(dividend, primeList) {
  for (const prime of primeList) {
    if (prime > dividend) return false
    if (isDivisibleBy(prime, dividend)) return true
  }
  return false
}

function isPrime(num, primeList, startNum) {
  if (num == 1) return false
  if (primeList.includes(num)) return true
  if (isDivisibleByPrimes(num, primeList)) {
    return false
  }
  return heavyIteratePrimes(num, startNum)
}

module.exports = {
  isPrime,
}
