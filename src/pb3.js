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
  let targetPrime = 2
  let ordinalCounter = 0
  let maxPrime = 2
  const readResult =
    ordinalLimit > DEFAULT_SMALL_ORDINAL_LIMIT
      ? readPrimesFromFile(PRIMES_FILENAME)
      : ELEMENTAL_PRIME_LIST

  const primeList = readResult === null ? [...ELEMENTAL_PRIME_LIST] : readResult
  if (primeList.length >= ordinalLimit) {
    return primeList[ordinalLimit - 1]
  }
  maxPrime = primeList[primeList.length - 1]
  for (let i = 1; i <= +Infinity; i++) {
    if (isPrime(i, primeList, maxPrime)) {
      ordinalCounter++
      targetPrime = i
      if (targetPrime > maxPrime) {
        primeList.push(targetPrime)
        console.log(primeList.length)
        maxPrime = targetPrime
      }
      if (ordinalLimit === ordinalCounter) break
    }
  }
  if (primeList.length >= readResult.length && ordinalLimit > DEFAULT_SMALL_ORDINAL_LIMIT)
    writePrimesToFile(PRIMES_FILENAME, primeList)
  return targetPrime
}

module.exports = {
  primeAt,
}
