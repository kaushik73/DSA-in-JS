const reverseWhencharComes = (str, char) => {
  let result = "";
  let prevCharIdx = 0;

  str.split("").forEach((element, index) => {
    if (element === char) {
      result +=
        str.slice(prevCharIdx, index).split("").reverse().join("") + char;
      prevCharIdx = index + 1;
    }
  });

  // Add the remaining part of the string after the last occurrence of the character
  result += str.slice(prevCharIdx).split("").reverse().join("");

  return result;
};

console.log(reverseWhencharComes("stringeikausixz", "i")); // Output: "rtsigneakus"
