/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 – 18 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const DEFAULT_PRIME_LIST = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
const PRIMES_FILENAME = 'pb3.primes.txt'
const { isDivisibleBy } = require('./utils/divisibility')
const { default: endent } = require('endent')
const fs = require('fs')

function writePrimesToFiles(primeList) {
  fs.writeFileSync(PRIMES_FILENAME, endent(primeList.join('\n')), {
    encoding: 'utf-8',
    flag: 'w+',
  })
}

function readPrimesFromFiles() {
  if (!fs.existsSync(PRIMES_FILENAME)) return null
  return fs
    .readFileSync(PRIMES_FILENAME, { encoding: 'utf8' })
    .toString()
    .split('\n')
    .map((x) => parseInt(x))
}

function isDivisibleByPrimes(dividend, primeList) {
  for (const prime of primeList) {
    if (isDivisibleBy(prime, dividend)) return true
  }
  return false
}

function isPrime(num, primeList, maxPrime = 0) {
  if (maxPrime === 0) maxPrime = Math.max(...primeList)
  if (num == 1) return false
  if (primeList.includes(num)) return true
  if (isDivisibleByPrimes(num, primeList)) {
    return false
  }
  // Brute-force the number. Cannot factorize greater than the number itself squared.
  for (let n = maxPrime; n < Math.sqrt(num); n++) {
    if (num % n === 0) {
      return true
    }
  }
  return true
}

function primeAt(ordinalLimit) {
  let targetPrime = 2
  let ordinalCounter = 0
  let maxPrime = 2
  const readResult = readPrimesFromFiles()
  const primeList = readResult === null ? [...DEFAULT_PRIME_LIST] : readResult
  maxPrime = Math.max(...primeList)
  for (let i = 1; i <= +Infinity; i++) {
    if (isPrime(i, primeList, maxPrime)) {
      ordinalCounter++
      targetPrime = i
      if (targetPrime > maxPrime) {
        primeList.push(targetPrime)
        maxPrime = targetPrime
      }
      if (ordinalLimit === ordinalCounter) break
    }
  }
  writePrimesToFiles(primeList)
  return targetPrime
}

module.exports = {
  primeAt,
}
