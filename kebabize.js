// Blerpherp Interview

// Anagram
// I - two strings
// O - boolean if they are an anagram

// Case does matter - need to convert

// "amber", "rbmae"
  // true
// "amber" "skjwejoireo"
  // false

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false

  str1 = str1
    .toLowerCase()
    .split("")
    .sort()
    .join("")

  str2 = str2
    .toLowerCase()
    .split("")
    .sort()
    .join("")

  return str1 == str2
}

// console.log(isAnagram("amber", "rbmae")) // .141s
console.log(isAnagram("amber", "iejorjiwjoirew")) // .111s
// console.log(isAnagram("amber", "rbbbe")) // .108s
