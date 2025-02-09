### 1. **`Promise.all`**

- **Description**: Takes an array of promises and returns a single promise that resolves when all of the promises have resolved, or rejects as soon as one of them rejects.
- **Use Case**: When you need to wait for multiple promises to finish, and any failure should halt execution.

```javascript
const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(20), 1000));
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results)) // Output: [10, 20, 30]
  .catch((error) => console.log(error));
```

- **Note**: If any promise rejects, `Promise.all` immediately rejects with that error.

---

### 2. **`Promise.allSettled`**

- **Description**: Takes an array of promises and returns a promise that resolves when all the promises are settled (either resolved or rejected).
- **Use Case**: When you need the results of all promises regardless of whether they succeeded or failed.

```javascript
const promise1 = Promise.resolve(10);
const promise2 = Promise.reject("Error!");
const promise3 = new Promise((resolve) => setTimeout(() => resolve(30), 1000));

Promise.allSettled([promise1, promise2, promise3]).then((results) =>
  console.log(results)
);
// Output:
// [
//   { status: 'fulfilled', value: 10 },
//   { status: 'rejected', reason: 'Error!' },
//   { status: 'fulfilled', value: 30 }
// ]
```

---

### 3. **`Promise.race`**

- **Description**: Takes an array of promises and returns a single promise that resolves or rejects as soon as the first promise resolves or rejects.
- **Use Case**: When you are waiting for the fastest promise (e.g., for timeout or fallback scenarios).

```javascript
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Fast"), 500)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Slow"), 1000)
);

Promise.race([promise1, promise2]).then((result) => console.log(result));
// Output: "Fast"
```

---

### 4. **`Promise.any`**

- **Description**: Takes an array of promises and returns a single promise that resolves as soon as any of the promises resolve. It rejects only if **all** promises reject.
- **Use Case**: When you need the first successful result, and failures can be ignored unless all fail.

```javascript
const promise1 = Promise.reject("Error 1");
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Success!"), 1000)
);
const promise3 = Promise.reject("Error 2");

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log(result)) // Output: "Success!"
  .catch((error) => console.log(error));
```

- **Note**: If all promises reject, it returns an `AggregateError` object.

---

### 5. **`Promise.resolve`**

- **Description**: Returns a promise that is resolved with the given value.
- **Use Case**: To quickly create a resolved promise.

```javascript
Promise.resolve(42).then((value) => console.log(value));
// Output: 42
```

---

### 6. **`Promise.reject`**

- **Description**: Returns a promise that is rejected with the given reason.
- **Use Case**: To quickly create a rejected promise.

```javascript
Promise.reject("Something went wrong").catch((error) => console.log(error));
// Output: "Something went wrong"
```

---

### Practical Comparison of Methods

| Method                   | Resolves When                          | Rejects When                           |
| ------------------------ | -------------------------------------- | -------------------------------------- |
| **`Promise.all`**        | All promises resolve                   | Any promise rejects                    |
| **`Promise.allSettled`** | All promises settle (resolve/reject)   | Never rejects                          |
| **`Promise.race`**       | First promise settles (resolve/reject) | First promise settles (resolve/reject) |
| **`Promise.any`**        | First promise resolves                 | All promises reject                    |
| **`Promise.resolve`**    | Instantly resolves                     | Never rejects                          |
| **`Promise.reject`**     | Never resolves                         | Instantly rejects                      |

---

### Example Using All Methods Together

```javascript
const p1 = Promise.resolve(10);
const p2 = new Promise((resolve) => setTimeout(() => resolve(20), 500));
const p3 = Promise.reject("Error!");

Promise.all([p1, p2, p3])
  .then((results) => console.log("All:", results))
  .catch((err) => console.log("All Error:", err));

Promise.allSettled([p1, p2, p3]).then((results) =>
  console.log("AllSettled:", results)
);

Promise.race([p2, p3]).then((result) => console.log("Race:", result));

Promise.any([p3, p2]).then((result) => console.log("Any:", result));
```
