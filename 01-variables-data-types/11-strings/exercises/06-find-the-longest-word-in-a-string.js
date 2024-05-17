/* Exercise 6: Find the Longest Word in a String

Objective:
Write a function that finds the longest word in a given string and returns its length.

Instructions:
Define a function named findLongestWord.
The function should accept a string argument.
Split the string into individual words.
Find the longest word in the string.
Return the length of the longest word.
Example:
findLongestWord("The quick brown fox jumped over the lazy dog"); // should return 6
findLongestWord("May the force be with you"); // should return 5
findLongestWord("Google do a barrel roll"); // should return 6 */

function findLongestWord(str) {
  return str
    .split(" ")
    .map((word) => word.length)
    .reduce((acc, curr) => Math.max(acc, curr), -Infinity);
}

// Test cases
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Expected output: 6
console.log(findLongestWord("May the force be with you")); // Expected output: 5
console.log(findLongestWord("Google do a barrel roll")); // Expected output: 6
