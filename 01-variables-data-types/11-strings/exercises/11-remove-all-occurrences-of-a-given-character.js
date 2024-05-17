/* Exercise 11: Remove All Occurrences of a Given Character

Objective:
Write a function that removes all occurrences of a given character from a string.

Instructions:
Define a function named removeCharacter.
The function should accept two arguments: a string and a character to be removed.
Return the string with all instances of the given character removed.

Example:
removeCharacter("hello world", "o"); // should return "hell wrld"
removeCharacter("javascript", "a"); // should return "jvscript"
removeCharacter("mississippi", "s"); // should return "miiippi" */

function removeCharacter(str, char) {
  return str.replaceAll(char, "");
}

// Test cases
console.log(removeCharacter("hello world", "o")); // Expected output: "hell wrld"
console.log(removeCharacter("javascript", "a")); // Expected output: "jvscript"
console.log(removeCharacter("mississippi", "s")); // Expected output: "miiippi"
