/*
JavaScript uses the valueOf method to convert objects to their primitive values when performing arithmetic operations.

The valueOf method allows objects to define their own primitive value, which is used in arithmetic operations. In your example, it enables the subtraction of two objects by returning their value properties.

*/

let a = {
  value: 10,
  valueOf: function () {
    return this.value;
  },
  name: "a",
};
let b = {
  value: 15,
  valueOf: function () {
    return this.value;
  },
  name: "b",
};

console.log(a - b); // -5
