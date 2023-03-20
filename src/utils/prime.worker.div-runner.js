/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 – 18 Mar 2023
 *
 * In response to Midas Developer Test (2023-03)
 */

const { parentPort, workerData } = require('node:worker_threads')
const { isDivisibleBy } = require('./divisibility')

const { prime, dividend } = workerData
parentPort.postMessage(isDivisibleBy(prime, dividend))
