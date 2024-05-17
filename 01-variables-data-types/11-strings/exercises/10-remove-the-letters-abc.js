/* 
Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

Examples
removeABC("This might be a bit hard") ➞ "This might e  it hrd"
removeABC("hello world!") ➞ null
removeABC("") ➞ null

Notes
If the given string does not contain "a", "b", or "c", return null. 
*/

function removeABC(str) {
  const res = str.replace(/[abc]/g, "");
  return str === res ? null : res;
}

// Test cases
console.log(removeABC("This might be a bit hard")); // Expected output: "This might e  it hrd"
console.log(removeABC("hello world!")); // Expected output: null
console.log(removeABC("")); // Expected output: null
