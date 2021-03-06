// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  // Initialize a map with all the letters and numbers and the values 0
  const letterNumberMap = {}
  const letterNumberString = "abcdefghijklmnopqrstuvwxyz0123456789"
  for (let i = 0; i < letterNumberString.length; i++) {
    letterNumberMap[letterNumberString[i]] = 0
  }

  // Convert string to lowercase
  text = text.toLowerCase()

  // Loop through string and add letter counts to the map
  for (let i = 0; i < text.length; i++) {
    letterNumberMap[text[i]]++
  }

  // Return number of map keys that have values greater than 1
  return Object.values(letterNumberMap).filter(value => value > 1).length
}

console.log(duplicateCount("abcde"))
// 0
console.log(duplicateCount("aabbcde"))
// 2
console.log(duplicateCount("aabBcde"))
// 2
