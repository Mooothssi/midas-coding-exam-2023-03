const { parentPort, workerData } = require('node:worker_threads')
const { isDivisibleBy } = require('./divisibility')

const { prime, dividend } = workerData
parentPort.postMessage(isDivisibleBy(prime, dividend))
