/*
Ip = 4
A
b C
d E f
G h I j

lower = 65 to 90 
upper = 97 to 122
*/
function printPattern(rows) {
  let isCapital = true;
  let currentAlpha = 65;

  for (let i = 1; i <= rows; i++) {
    const rowChars = [];

    for (let j = 1; j <= i; j++) {
      const baseChar = String.fromCharCode(currentAlpha);
      const char = isCapital ? baseChar : baseChar.toLowerCase();

      rowChars.push(char);
      isCapital = !isCapital;
      currentAlpha++;
    }

    console.log(rowChars.join(" "));
  }
}

printPattern(4);
