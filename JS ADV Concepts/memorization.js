function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Fetching from cache");
      return cache[key];
    } else {
      console.log("Calculating result");
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const add = memoize((a, b) => a + b);

// Example usage
console.log(add(5, 10)); // Output: Calculating result, 15
console.log(add(5, 10)); // Output: Fetching from cache, 15
console.log(add(3, 7)); // Output: Calculating result, 10
console.log(add(3, 7)); // Output: Fetching from cache, 10
