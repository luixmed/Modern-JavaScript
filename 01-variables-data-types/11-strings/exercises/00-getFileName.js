function getFileName(fileName) {
  if (!fileName) {
    throw new Error("Invalid input: fileName cannot be empty");
  }

  const lowerCaseArray = fileName.toLowerCase().split(" ");
  let number = +lowerCaseArray[0].slice(0, -1);

  if (number < 9) lowerCaseArray[0] = `0${number}`;

  return lowerCaseArray.join("-");
}

console.log(getFileName("5: Remove All Occurrences of a Given Character"));
