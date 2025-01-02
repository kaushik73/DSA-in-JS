function outerFunction() {
  let count = 0;
  return function innerFunction() {
    count++;
    console.log(count);
  };
}

const counter = outerFunction();
counter(); // Outputs: 1
counter(); // Outputs: 2
