// A
// b C
// d E f
// G h I j K

const capitalize = (char) => {
  return char.toUpperCase();
};

const printTriangle1 = (num) => {
  let idx = 96;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      if ((i + j) % 2 == 0) {
        console.log(capitalize(idx + "a"));
      } else {
        console.log(idx + "a");
      }
    }
    console.log("\n");
  }
};

const printTriangle = (num) => {
  let idx = 97; // ASCII value for 'a'
  for (let i = 0; i < num; i++) {
    let line = ""; // Accumulate characters in a line
    for (let j = 0; j <= i; j++) {
      const char = String.fromCharCode(idx); // Convert ASCII value to character
      if ((i + j) % 2 === 0) {
        line += capitalize(char) + " "; // Uppercase letter
      } else {
        line += char + " "; // Lowercase letter
      }
      idx++; // Move to the next character
    }
    console.log(line.trim()); // Print the line
  }
};

printTriangle(4);
