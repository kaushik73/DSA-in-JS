// ✅ Resolves as soon as any promise fulfills
// ❌ Rejects only if all promises reject, with an AggregateError

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let rejectedCount = 0;
    const total = promises.length;

    if (total === 0) {
      // Edge case: empty array
      reject(new AggregateError([], "All promises were rejected"));
    }

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(resolve)
        .catch((err) => {
          errors[i] = err;
          rejectedCount++;
          if (rejectedCount === total) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}

const p1 = Promise.reject("Error 1");
const p2 = Promise.reject("Error 2");
const p3 = Promise.resolve("Success!");

promiseAny([p1, p2, p3])
  .then(console.log) // Output: "Success!"
  .catch(console.error);

promiseAny([Promise.reject("E1"), Promise.reject("E2")])
  .then(console.log)
  .catch((err) => console.error(err.errors)); // Output: ["E1", "E2"]
