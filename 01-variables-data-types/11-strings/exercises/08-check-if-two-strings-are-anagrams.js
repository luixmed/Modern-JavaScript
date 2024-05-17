/* Exercise 8: Check if Two Strings are Anagrams

Objective:
Write a function that checks whether two given strings are anagrams of each other. Anagrams are words or phrases formed by rearranging the letters of another word or phrase, typically using all the original letters exactly once.

Instructions:
Define a function named areAnagrams.
The function should accept two string arguments.
Check if both strings contain the same characters (ignoring spaces and capitalization).
Return true if the strings are anagrams, otherwise return false.

Example:
areAnagrams("listen", "silent"); // should return true
areAnagrams("hello", "world"); // should return false
areAnagrams("Debit Card", "Bad Credit"); // should return true */

function areAnagrams(str1, str2) {
  // Helper function to clean and sort the string
  function cleanString(str) {
    return str.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
  }

  // Clean and sort both strings
  const cleanStr1 = cleanString(str1);
  const cleanStr2 = cleanString(str2);

  // Compare the cleaned and sorted strings
  return cleanStr1 === cleanStr2;
}

// Test cases
console.log(areAnagrams("listen", "silent")); // Expected output: true
console.log(areAnagrams("hello", "world")); // Expected output: false
console.log(areAnagrams("Debit Card", "Bad Credit")); // Expected output: true

// Test cases
console.log(areAnagrams("listen", "silent")); // Expected output: true
console.log(areAnagrams("hello", "world")); // Expected output: false
console.log(areAnagrams("Debit Card", "Bad Credit")); // Expected output: true
