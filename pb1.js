/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 * 
 * In response to Midas Developer Test (2023-03)
 */

/**
 * (Problem 1) Solution
 * @param {*} numberArray
 * @returns
 */
function getMostFrequentNumberAndCount(numberArray) {
  let result = 0,
    maxCount = 0
  const freqMap = new Map()

  for (let number of numberArray) {
    if (!freqMap.has(number)) {
      freqMap.set(number, 1)
      continue
    }
    freqMap.set(number, freqMap.get(number) + 1)
  }
  freqMap.forEach(function (value, key) {
    if (value > maxCount) {
      maxCount = value
      result = key
    }
  })
  return {
    result,
    count: maxCount,
  }
}

module.exports = {
  getMostFrequentNumberAndCount,
}
