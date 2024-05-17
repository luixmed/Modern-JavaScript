function getFileName(fileName) {
  if (!fileName) {
    throw new Error("Invalid input: fileName cannot be empty");
  }

  const lowerCaseArray = fileName.toLowerCase().split(" ");
  const firstChar = lowerCaseArray[0].charAt(0);

  // Ensure the first character is a digit and prepend '0'
  const number = `0${firstChar}`;

  const words = lowerCaseArray.slice(1).join("-");

  return `${number}-${words}.js`;
}

console.log(getFileName("3: Check for Palindrome"));
