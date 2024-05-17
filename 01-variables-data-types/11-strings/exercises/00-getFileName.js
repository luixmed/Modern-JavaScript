function getFileName(fileName) {
  const lowerCaseArray = fileName.toLowerCase().split(" ");

  let number = +lowerCaseArray[0].slice(0, -1);
  lowerCaseArray[0] = number < 9 ? `0${number}` : number;

  return lowerCaseArray.join("-").concat(".js");
}

console.log(getFileName("10: Remove the Letters ABC"));
