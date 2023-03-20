/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 – 18 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

function heavyIteratePrimes(num, startPrime) {
  // Brute-force the number. Cannot factorize greater than the number itself squared.
  // TODO: pass on this heavy work to a worker thread
  for (let n = startPrime; n < num; n++) {
    if (num % n === 0) {
      return false
    }
  }
  return true
}

module.exports = {
  heavyIteratePrimes
}