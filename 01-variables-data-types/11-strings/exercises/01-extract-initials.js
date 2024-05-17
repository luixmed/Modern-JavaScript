/* Objective:
Write a function that takes a full name as input and returns the initials in uppercase.

getInitials("john doe"); // should return "JD"
getInitials("Jane Ann Doe"); // should return "JAD" */

function getInitials(fullName) {
  return fullName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

// Test cases
console.log(getInitials("john doe")); // Expected output: "JD"
console.log(getInitials("Jane Ann Doe")); // Expected output: "JAD"
console.log(getInitials("samuel l jackson")); // Expected output: "SLJ"
