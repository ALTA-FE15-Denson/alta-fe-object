function meanMedian(arrayInput: number[]): number[] {
  // your code here
  let means = 0
  let median = 0
  for (let i = 0; i < arrayInput.length; i++) {
    means += arrayInput[i]
  }

  let mean: number = means / arrayInput.length

  if (arrayInput.length % 2 === 0) {
    const value1 = arrayInput.length / 2 - 1

    const value2 = arrayInput.length / 2

    median += (arrayInput[value1] + arrayInput[value2]) / 2
  } else {
    const value3 = Math.floor(arrayInput.length / 2)
    median += arrayInput[value3]
  }

  return [mean, median]
}

console.log(meanMedian([1, 2, 3, 4])) // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])) // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])) // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])) // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])) // 49 30
