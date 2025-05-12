// The callback function is called for each element in the array,
// and it receives the current element, its index, and the entire array as arguments.

// Example Without hasOwnProperty
Array.prototype.extraProperty = "I am inherited";

const arr = [1, 2, 3];
for (let key in arr) {
  console.log(key); // Outputs: 0, 1, 2, extraProperty
}

// In this example, extraProperty is an inherited property and would be included in
// the loop if hasOwnProperty is not used.

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Example usage
const filteredArr = arr.myFilter((x) => x % 2 === 0);
console.log(filteredArr); // Output: [2, 4]

// Concept :
/*

Great question! The reason `"I am inherited"` is considered as an index of `arr` in the example is due to how JavaScript handles properties and inheritance.

### Understanding Property Enumeration

When you use a `for...in` loop to iterate over an array, it enumerates all enumerable properties of the array, including inherited properties from the prototype chain. Here's a breakdown:

1. **Enumerable Properties**:
   - These are properties that can be iterated over in a `for...in` loop.
   - By default, properties added to an object or array are enumerable unless explicitly set otherwise.

2. **Prototype Chain**:
   - JavaScript objects (including arrays) have a prototype chain. Properties and methods defined on the prototype are inherited by all instances of that object.
   - In the example, `Array.prototype.extraProperty = 'I am inherited';` adds an enumerable property to the `Array` prototype.

Array.prototype.extraProperty = 'I am inherited';
const arr = [1, 2, 3];
for (let key in arr) {
  console.log(key); // Outputs: 0, 1, 2, extraProperty
}

- **Direct Properties**: `0`, `1`, `2` are the indices of the array elements `1`, `2`, `3`.
- **Inherited Property**: `extraProperty` is an enumerable property added to `Array.prototype`.

### Why It Appears in the Loop

- The `for...in` loop iterates over all enumerable properties, including those inherited from the prototype chain.
- Since `extraProperty` is enumerable and part of the prototype chain, it appears in the loop.

### Avoiding Inherited Properties

To avoid processing inherited properties, you can use the `hasOwnProperty` method:

for (let key in arr) {
  if (arr.hasOwnProperty(key)) {
    console.log(key); // Outputs: 0, 1, 2
  }
}

This ensures that only the direct properties of the array are considered, excluding any inherited properties.

### Summary

The `"I am inherited"` property is considered an index because it is an enumerable property on the `Array` prototype. Using `hasOwnProperty` helps filter out such inherited properties, ensuring only the actual elements of the array are processed.

Does this help clarify things? Let me know if you have any more questions!

*/
