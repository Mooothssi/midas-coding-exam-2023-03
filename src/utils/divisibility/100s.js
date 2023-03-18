function isDivisibleByOneHundredAndOne(dividend) {
  let counter = 1
  const oddPlaces = []
  const evenPlaces = []
  let modifiableNum = dividend
  let remainder = 11
  while (modifiableNum >= 1) {
    remainder = modifiableNum % 10
    if (counter % 2 === 0) evenPlaces.push(remainder)
    else oddPlaces.push(remainder)
    counter++
    modifiableNum = Math.floor(modifiableNum / 10)
  }
  const diff = Math.abs(
    oddPlaces.reduce((a, b) => a + b, 0) -
      evenPlaces.reduce((a, b) => a + b, 0),
  )
  return diff == 0 || diff % 11 === 0
}
