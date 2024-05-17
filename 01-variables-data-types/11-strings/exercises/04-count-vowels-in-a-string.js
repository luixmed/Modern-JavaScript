/* Exercise 4: Count Vowels in a String
Objective:
Write a function that counts the number of vowels in a given string.

Instructions:
Define a function named countVowels.
The function should accept a string argument.
Count the number of vowels (a, e, i, o, u), both uppercase and lowercase.
Return the count of vowels.

Example:
countVowels("hello world"); // should return 3
countVowels("AEIOU aeioo"); // should return 10
countVowels("JavaScript"); // should return 3 */

function countVowels(str) {
  return str
    .split("")
    .reduce((num, letter) => num + Number("aeiouAEIOU".includes(letter)), 0);
}

// Test cases
console.log(countVowels("hello world")); // Expected output: 3
console.log(countVowels("AEIOU aeioo")); // Expected output: 10
console.log(countVowels("JavaScript")); // Expected output: 3

// CHAT GPT SOLUTION

function countVowelsChatGPT(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
