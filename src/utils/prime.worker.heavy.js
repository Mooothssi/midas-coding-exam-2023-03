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