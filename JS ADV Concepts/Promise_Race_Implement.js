// It resolves or rejects as soon as the first promise in the array settles.

// This implementation uses `Promise.resolve` to ensure that each item in the `promises` array is treated as a promise, even if it's not.
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

// Example usage:
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 500)
);
const p3 = new Promise((_, reject) =>
  setTimeout(() => reject("Promise 3 rejected"), 2000)
);
promiseRace([p1, p2, p3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error)); // Output: "Promise 2 resolved" (or "Promise 1 resolved" if it resolves first)
