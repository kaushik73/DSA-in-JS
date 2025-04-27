// 1. **How do you merge two objects in JavaScript?**
let obj11 = { b: 3, c: 4 };
let obj12 = { a: 1, b: 2 };
let merged = { ...obj12, ...obj11 }; // { a: 1, b: 3, c: 4 }

// 2. **How do you check if a key exists in an object?**

let obj2 = { name: "Alice", age: 25 };
console.log("name" in obj2); // true
console.log(obj2.hasOwnProperty("age")); // true

// 3. **How do you get all the keys and values from an object?**
let obj3 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj3)); // ['a', 'b', 'c']
console.log(Object.values(obj3)); // [1, 2, 3]
console.log(Object.entries(obj3)); // [['a', 1], ['b', 2], ['c', 3]]

// 4. **How do you delete a property from an object?**

let obj4 = { a: 1, b: 2 };
delete obj4.a;
console.log(obj4); // { b: 2 }

// 5. **How do you freeze or seal an object?**

let obj5 = { a: 1, b: 2 };
Object.freeze(obj5); // Prevents modifications
obj5.a = 10; // No effect
console.log(obj5); // { a: 1, b: 2 }

// 6. **Write a function to swap keys and values in an object.**
function swapKeyValue(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}
console.log(swapKeyValue({ a: 1, b: 2 })); // { '1': 'a', '2': 'b' }

// Object.entries(obj) : This method returns an array of the object's string-keyed property [key, value] pairs.
//  So, { a: 1, b: 2 } becomes [ ['a', 1], ['b', 2] ].

// Object.fromEntries():
// This method transforms the array of [value, key] pairs back into an object.
// So, [ [1, 'a'], [2, 'b'] ] becomes { 1: 'a', 2: 'b' }.

// 7. **How do you deep clone an object in JavaScript?**
let obj7 = { a: { b: 2 } };
let deepCopy = JSON.parse(JSON.stringify(obj7)); // Deep clone

// 8. **How do you filter an object based on key-value conditions?**
let obj8 = { a: 1, b: 2, c: 3 };
let filtered = Object.fromEntries(
  Object.entries(obj8).filter(([key, value]) => value > 1)
);
console.log(filtered); // { b: 2, c: 3 }

// 9. **How do you count the occurrences of each element in an array and store them in an object?**
let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
// 1st method : Using for...of loop
let count1 = {};
for (let i of arr) {
  count1[i] = (count1[i] || 0) + 1;
}
console.log(count1);
// 2nd method : Using reduce
let count = arr.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

// 10. **Write a function to flatten a nested object.**
function flattenObject(obj, prefix = "") {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    let newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      Object.assign(acc, flattenObject(value, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}

let nested = { a: { b: { c: 1 } }, d: 2 };
console.log(flattenObject(nested));
// { 'a.b.c': 1, d: 2 }

// 11. **How do you find the difference between two objects?**
function objectDiff(obj1, obj2) {
  return Object.keys(obj1).reduce((diff, key) => {
    if (obj1[key] !== obj2[key]) {
      diff[key] = obj2[key];
    }
    return diff;
  }, {});
}

let obj112 = { a: 1, b: 2, c: 3 };
let obj212 = { a: 1, b: 4, c: 3 };
console.log(objectDiff(obj112, obj212)); // { b: 4 }

// 12. **Write a function to unflatten an object.**
function unflattenObject(obj) {
  let result = {};
  for (let [key, value] of Object.entries(obj)) {
    key.split(".").reduce((acc, part, index, arr) => {
      return acc[part] || (acc[part] = arr.length - 1 === index ? value : {});
    }, result);
  }
  return result;
}

let flat = { "a.b.c": 1, d: 2 };
console.log(unflattenObject(flat));
// { a: { b: { c: 1 } }, d: 2 }

// 13. **How do you make an object immutable?**
let obj = Object.freeze({ a: 1, b: { c: 2 } });
obj.a = 10; // No effect

// 14. **How do you implement a LRU (Least Recently Used) Cache using an object?**
class LRUCache {
  constructor(size) {
    this.size = size;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    if (this.cache.size >= this.size)
      this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, value);
  }
}

let cache = new LRUCache(2);
cache.put(1, 100);
cache.put(2, 200);
console.log(cache.get(1)); // 100
cache.put(3, 300); // Removes key 2
console.log(cache.get(2)); // -1
