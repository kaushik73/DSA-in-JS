function curring(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curring(1)(2)(3)); // 6

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      // Enough arguments collected: invoke the original function
      return fn(...args);
    } else {
      // Not enough arguments: return a function that collects more
      return function (...nextArgs) {
        return curried(...args, ...nextArgs); // recursively accumulate
      };
    }
  };
}

// Example usage:
function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
// console.log(curriedAdd(1, 2, 3, 4)); // Error: Too many arguments
