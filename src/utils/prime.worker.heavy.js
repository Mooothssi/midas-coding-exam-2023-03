const { parentPort, workerData } = require('node:worker_threads')

function heavyIteratePrimes(num, maxPrime) {
  // Brute-force the number. Cannot factorize greater than the number itself squared.
  // TODO: pass on this heavy work to a worker thread
  for (let n = maxPrime; n < Math.sqrt(num); n++) {
    if (num % n === 0) {
      return false
    }
  }
  return true
}

const { num, maxPrime } = workerData
parentPort.postMessage(heavyIteratePrimes(num, maxPrime))
