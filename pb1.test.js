/**
 * Author: Tharathorn Boonruttanasathian
 * (c) 17 Mar 2023
 */
const { getMostFrequentNumberAndCount } = require('./pb1')

test('Example 1: [6, -1, 6, 3, 3, 6, 5, 6, 6, 7])', () => {
  expect(
    getMostFrequentNumberAndCount([6, -1, 6, 3, 3, 6, 5, 6, 6, 7]),
  ).toStrictEqual({
    result: 6,
    count: 5,
  })
})
