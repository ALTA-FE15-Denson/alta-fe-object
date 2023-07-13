function removeDuplicates(array: number[]): number {
  // your code here

  const noDuplicate = Array.from(new Set(array)).length

  return noDuplicate
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])) // 4
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])) // 6
console.log(removeDuplicates([2, 2, 2, 11])) // 2
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])) // 4
