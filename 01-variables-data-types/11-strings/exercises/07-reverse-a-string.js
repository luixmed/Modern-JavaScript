/* Exercise 7: Reverse a String

Objective:
Write a function that reverses a given string.

Instructions:
Define a function named reverseString.
The function should accept a string argument.
Reverse the characters of the string.
Return the reversed string.

Example:
reverseString("hello"); // should return "olleh"
reverseString("Greetings from Earth"); // should return "htraE morf sgniteerG"
reverseString("12345"); // should return "54321" */

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Test cases
console.log(reverseString("hello")); // Expected output: "olleh"
console.log(reverseString("Greetings from Earth")); // Expected output: "htraE morf sgniteerG"
console.log(reverseString("12345")); // Expected output: "54321"
