// + operator returns 1 if true, 0 if false
let x = 3 > 2 ? 3 : 2;

let y = [2, 3][+(3 > 2)];

console.log("x,y are same ", x, y); // 3 3

//--------------------------------------------
// the !! (double negation) operator is a common way to convert a value to its boolean equivalent
console.log(!!true); // true
console.log(!!false); // false

console.log(!!"hello"); // true
console.log(!!""); // false

console.log(!!0); // false
console.log(!!1); // true
console.log(!!-1); // true

console.log(!!null); // false
console.log(!!undefined); // false

//--------------------------------------------

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

//--------------------------------------------

const arr = [2, , 3, , , null, undefined, "error"];

console.log(arr); // [ 2, <1 empty item>, 3, <2 empty items>, null, undefined, 'error' ]
console.log(1 < 2 < 3); // true
console.log(1 > 2 > 3); // false

//--------------------------------------------

const whatItReturns = () => {
  return; //       **return** this was i wrote on this line
  {
    name: "kaushik";
  }
};

console.log(x()); // undefined as js inserts a semicolon after return because { is on next line}

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
