const { isDivisibleBy } = require('./divisibility')
const { Worker } = require('node:worker_threads')
const path = require('path')

function isDivisibleByPrimes(dividend, primeList) {
  // const returnValue = false
  // const working = true
  // const initiated = false
  // while (working) {
  //   if (!initiated) {
  //     Promise.all(
  //       primeList.map((prime) => {
  //         new Promise((resolve, reject) => {
  //           const divisibilityRunner = new Worker(
  //             path.join(__dirname, 'prime.worker.div-runner.js'),
  //             {
  //               workerData: { prime, dividend },
  //             },
  //           )
  //           divisibilityRunner.on('message', resolve)
  //           divisibilityRunner.on('error', reject)
  //           divisibilityRunner.on('exit', (code) => {
  //             if (code !== 0)
  //               reject(new Error(`Worker stopped with exit code ${code}`))
  //           })
  //         })
  //       }),
  //     )
  //       .then((values) => {
  //         if (values.filter((x) => x === true).length > 0) returnValue = true
  //       })
  //       .finally(() => (working = false))
  //     initiated = true
  //   }
  // }
  for (const prime of primeList) {
    if (isDivisibleBy(prime, dividend)) return true
  }
  return false
}

function initiateHeavyIteratePrimes(num, maxPrime) {
  return new Promise((resolve, reject) => {
    const heavyPrimeWorker = new Worker(
      path.join(__dirname, 'prime.worker.heavy.js'),
      {
        workerData: { num, maxPrime },
      },
    )
    heavyPrimeWorker.on('message', resolve)
    heavyPrimeWorker.on('error', reject)
    heavyPrimeWorker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`))
    })
  })
}

function isPrime(num, primeList, maxPrime = 0) {
  if (maxPrime === 0) maxPrime = Math.max(...primeList)
  if (num == 1) return false
  if (primeList.includes(num)) return true
  if (isDivisibleByPrimes(num, primeList)) {
    return false
  }
  let iterating = true
  let initiated = false
  let returnValue = false
  while (iterating) {
    if (!initiated) {
      initiateHeavyIteratePrimes(num, maxPrime)
        .then((val) => {
          returnValue = val
        })
        .finally(() => (iterating = false))
      initiated = true
    }
  }
  return returnValue
}

module.exports = {
  isPrime,
}
