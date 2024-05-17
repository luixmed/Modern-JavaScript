/* Exercise 3: Check for Palindrome

Objective:
Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

Instructions:
Define a function named isPalindrome.
The function should accept a string argument.
Remove all non-alphanumeric characters and convert the string to lowercase.
Check if the processed string reads the same forward and backward.
Return true if it is a palindrome, otherwise return false.

Example:
isPalindrome("A man, a plan, a canal, Panama"); // should return true
isPalindrome("racecar"); // should return true
isPalindrome("hello"); // should return false */

function isPalindrome(str) {
  const alphanumericOnly = str.toLowerCase().replace(/\W+/g, "");
  const reversed = alphanumericOnly.split("").reverse().join("");
  return alphanumericOnly === reversed;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Expected output: true
console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false
