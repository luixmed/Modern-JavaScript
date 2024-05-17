/* Exercise 2: Mask Credit Card Number
Objective:
Write a function that takes a credit card number as input and returns the number masked, showing only the last 4 digits. The rest of the digits should be replaced by *.

Instructions:
Define a function named maskCreditCard.
The function should accept a string argument representing the credit card number.
Extract the last 4 digits.
Replace the preceding digits with *.
Return the masked credit card number. 

maskCreditCard("1234567812345678"); // should return "************5678"
maskCreditCard("1234 5678 1234 5678"); // should return "************5678" (consider spaces) */

function maskCreditCard(cardNumber) {
  // Remove spaces from the card number
  const cardNumberWithoutSpaces = cardNumber.replace(/\s+/g, "");
  // Get the last 4 digits
  const last4Digits = cardNumberWithoutSpaces.slice(-4);
  // Create a masked string with asterisks for the preceding digits
  const masked = "*".repeat(cardNumberWithoutSpaces.length - 4);
  // Concatenate the masked string with the last 4 digits
  return masked + last4Digits;
}

// Test cases
console.log(maskCreditCard("1234567812345678")); // Expected output: "************5678"
console.log(maskCreditCard("1234 5678 1234 5678")); // Expected output: "************5678"
console.log(maskCreditCard("9876543210987654")); // Expected output: "************7654"
