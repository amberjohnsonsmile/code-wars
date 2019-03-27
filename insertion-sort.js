// Insertion sort rearranges the array in place
function insertionSort(arr) {
  // Outer loop starts at second item, compare to every other
  for (let outer = 1; outer < arr.length; outer++) {
    // Inner loop looks at every item up to the outer item
    for (let inner = 0; inner < outer; inner++) {
      // If outer < inner, we will remove the inner item and put it in from of the outer (splice)
      if (arr[outer] < arr[inner]) {
        // Remove outer
        const number = arr.splice(outer, 1)[0]
        // Put it before inner
        arr.splice(inner, 0, number)
      }
    }
  }
  return arr
}

const numbers = [3, 7, 8, 4, 2, 0, 1]
console.log(insertionSort(numbers))
