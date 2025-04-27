console.log(null === null);
console.log(NaN - NaN);
console.log(0 <= 1);
console.log([] === {});
console.log([1] == [1], "array");
console.log({} === {});
console.log(-0 === 0);
console.log("" === "");

for (let b = 1; b < 5; b++) {
  setTimeout(() => {
    console.log(b, "let");
  }, 0);
}

for (var a = 1; a < 5; a++) {
  setTimeout(() => {
    console.log(a, "var");
  }, 0);
}

// setTimeout Function:
/*
The setTimeout function is called with a delay of 0 milliseconds. However, the actual execution of the callback function is deferred until the current execution stack is cleared.
*/

// Closure and Variable Scope:
/*
By the time the setTimeout callbacks are executed, the loop has already completed, and the value of a is 5. This happens because var does not create a new scope for each iteration of the loop.
*/

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
