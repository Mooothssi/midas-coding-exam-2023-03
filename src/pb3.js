/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 – 18 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const ELEMENTAL_PRIME_LIST = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
const PRIMES_FILENAME = 'pb3.primes.txt'
const DEFAULT_SMALL_ORDINAL_LIMIT = 10

const { default: endent } = require('endent')
const fs = require('fs')
const { getLastDigit } = require('./utils/base')
const { isPrime } = require('./utils/prime')

function readPrimesFromFile(filename) {
  if (!fs.existsSync(filename)) return null
  return fs
    .readFileSync(filename, { encoding: 'utf8' })
    .toString()
    .split('\n')
    .map((x) => parseInt(x))
}

function writePrimesToFile(filename, primeList) {
  fs.writeFileSync(filename, endent(primeList.join('\n')), {
    encoding: 'utf-8',
    flag: 'w+',
  })
}

/**
 * Retrieves the prime number at the given order
 * @param {*} ordinalLimit the given order _(1st, 2nd, 3rd, etc.)_
 * @returns the target prime number at the given order
 */
function primeAt(ordinalLimit) {
  const readResult =
    ordinalLimit > DEFAULT_SMALL_ORDINAL_LIMIT
      ? readPrimesFromFile(PRIMES_FILENAME)
      : ELEMENTAL_PRIME_LIST
  const primeList = readResult === null ? [...ELEMENTAL_PRIME_LIST] : readResult

  let targetPrime = 2
  let ordinalCounter = 0
  let maxPrime = primeList[primeList.length - 1]
  let nearestPrime = 2
  if (primeList.length >= ordinalLimit) {
    return primeList[ordinalLimit - 1]
  } else {
    nearestPrime = maxPrime
    ordinalCounter = primeList.length - 1
  }
  let i = nearestPrime
  const lastDigitOfNearestPrime = getLastDigit(nearestPrime)
  let quickLastDigit = [1, 3, 7, 9].findIndex(
    (x) => x === lastDigitOfNearestPrime,
  )
  let quickOffsets = [+2, +4, +2, +2]
  let n = quickLastDigit === -1 ? 0 : quickLastDigit
  while (i <= +Infinity) {
    if (isPrime(i, primeList, nearestPrime)) {
      ordinalCounter++
      targetPrime = i
      if (targetPrime > maxPrime) {
        primeList.push(targetPrime)
        maxPrime = targetPrime
      }
      if (ordinalCounter === ordinalLimit) break
    }
    if (i >= 11) {
      i += quickOffsets[n]
      n = (n + 1) % 4
    } else {
      i++
    }
  }
  if (
    primeList.length >= readResult.length &&
    ordinalLimit > DEFAULT_SMALL_ORDINAL_LIMIT
  )
    writePrimesToFile(PRIMES_FILENAME, primeList)
  return targetPrime
}

module.exports = {
  primeAt,
}
