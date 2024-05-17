/* Exercise 9: Truncate a String

Objective:
Write a function that truncates a string if it is longer than a specified number of characters and adds "..." at the end.

Instructions:
Define a function named truncateString.
The function should accept two arguments: a string and a number indicating the maximum length.
If the string length is greater than the specified number, truncate the string and add "..." at the end.
If the string length is less than or equal to the specified number, return the string unchanged.

Example:
truncateString("A-tisket a-tasket A green and yellow basket", 8); // should return "A-tisket..."
truncateString("Peter Piper picked a peck of pickled peppers", 11); // should return "Peter Piper..."
truncateString("Hello World", 20); // should return "Hello World" */

function truncateString(str, num) {
  if (str.length <= num) return str;

  return str.slice(0, num).concat("...");
}

// Test cases
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // Expected output: "A-tiske..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // Expected output: "Peter Piper..."
console.log(truncateString("Hello World", 20)); // Expected output: "Hello World"
