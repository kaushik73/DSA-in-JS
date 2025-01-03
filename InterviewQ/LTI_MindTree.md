### **1️⃣ How would you center a `div` inside another `div`?**

**Methods to center a `div`:**

1. **Flexbox:**
   ```css
   .parent {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   ```
2. **CSS Grid:**
   ```css
   .parent {
     display: grid;
     place-items: center;
   }
   ```
3. **Absolute Positioning:**
   ```css
   .child {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
   }
   ```

---

### **2️⃣ Explain Tree Shaking and Bundling in modern JavaScript applications.**

- **Tree Shaking:**  
  Eliminates unused code during the build process, reducing bundle size. It's based on static analysis of ES6 module imports/exports.

- **Bundling:**  
  Combines multiple JavaScript files into a single file (or a few files), reducing the number of HTTP requests.

---

### **3️⃣ Have you worked with state management libraries like Zustand?**

Yes, Zustand is a lightweight state management library for React. It allows creating global state with minimal boilerplate. Unlike Redux, it doesn't require actions or reducers and is more intuitive for small-to-medium apps.

---

### **4️⃣ Techniques for optimizing React performance.**

1. Use **React.memo** for preventing unnecessary re-renders.
2. Split components using **Code-Splitting** or **React.lazy**.
3. Use **useCallback** and **useMemo** to memoize functions and computations.
4. Avoid anonymous functions in props.
5. Optimize state by colocating it and reducing its usage in unnecessary components.

---

### **5️⃣ Write a function to check if a string is a palindrome (without using reverse string logic).**

```javascript
function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
```

---

### **6️⃣ What's the output of `console.log(this)` in JavaScript?**

- In the **global scope**:
  - Browser: `this` refers to the `window` object.
  - Node.js: `this` refers to an empty object (`{}`).
- Inside a **function**: Depends on the invocation context.
- In **arrow functions**: `this` is lexically bound (inherited from the enclosing scope).

---

### **7️⃣ Key differences between arrow functions and regular functions.**

| **Arrow Function**              | **Regular Function**         |
| ------------------------------- | ---------------------------- |
| Does not have its own `this`.   | Has its own `this`.          |
| Cannot be used as constructors. | Can be used as constructors. |
| Lexical `this` binding.         | Dynamic `this` binding.      |
| No `arguments` object.          | Has an `arguments` object.   |

---

### **8️⃣ Write a program using Promise and Async/Await.**

**Promise:**

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
}

fetchData().then(console.log); // "Data fetched"
```

**Async/Await:**

```javascript
async function fetchDataAsync() {
  const data = await fetchData();
  console.log(data);
}

fetchDataAsync(); // "Data fetched"
```

---

### **9️⃣ Output-based questions on `var`, hoisting, and async/await.**

```javascript
console.log(a); // undefined
var a = 5;

(async () => {
  console.log(1); // 1
  const res = await Promise.resolve(2);
  console.log(res); // 2
})();
```

---

### **🔟 What are closures in JavaScript?**

A closure is a function that retains access to its outer scope even after the outer function has finished executing.  
Example:

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

### **1️⃣1️⃣ How would you efficiently handle 5000 records from an API call for a dropdown?**

1. Use **lazy loading** or **pagination** to fetch data in chunks.
2. Use a library like **React-Select** for optimized dropdowns.
3. Implement **debouncing** or **throttling** for search functionality.

---

### **1️⃣2️⃣ How is Async/Await different from Promises?**

- **Promises:** Uses `.then` and `.catch` for handling asynchronous operations.
- **Async/Await:** Provides a synchronous-looking syntax for handling promises. It's easier to read and write.

---

### **1️⃣3️⃣ What do the `^` and `~` signs mean in `package.json`?**

- `^`: Allows updates to the **minor** version.  
  Example: `^1.2.3` allows `1.3.x` but not `2.0.0`.
- `~`: Allows updates to the **patch** version.  
  Example: `~1.2.3` allows `1.2.x` but not `1.3.0`.

---

### **1️⃣4️⃣ What are dev dependencies in `package.json`?**

Packages required only for development (e.g., testing, linting, or build tools). They are specified under the `devDependencies` section.

---

### **1️⃣5️⃣ Explain Node.js and the Event Loop.**

Node.js is a runtime for executing JavaScript on the server side.
The **Event Loop** processes non-blocking operations like I/O and timers, enabling asynchronous programming.

---

### **1️⃣6️⃣ What is hoisting? Example:**

Hoisting means moving variable and function declarations to the top of their scope before code execution.

```javascript
console.log(a); // undefined
var a = 10;
```

---

### **1️⃣8️⃣ Write code for `mul(2)(3)(4) = 24`.**

```javascript
function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(mul(2)(3)(4)); // 24
```

---

### **1️⃣9️⃣ Have you worked with Axios? What are interceptors?**

Yes, Axios is an HTTP client for making requests. **Interceptors** allow you to modify requests or responses globally before they are handled.  
Example:

```javascript
axios.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer token";
  return config;
});
```

---

### **2️⃣0️⃣ Why do we need the `useRef` hook in React?**

`useRef` is used to:

1. Access DOM elements directly.
2. Store mutable values that don't trigger re-renders.
3. Keep track of previous values.  
   Example:

```javascript
const inputRef = useRef();
inputRef.current.focus();
```
