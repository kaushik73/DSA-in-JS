function deepOmit(obj, keysToOmit) {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepOmit(item, keysToOmit));
  }

  if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      if (!keysToOmit.includes(key)) {
        acc[key] = deepOmit(obj[key], keysToOmit);
      }
      return acc;
    }, {});
  }
  return obj;
}

// Example usage
const data = {
  id: 1,
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "traveling"],
};

const result = deepOmit(data, ["age", "address.city"]);
console.log(result); // Output:
// { id: 1, name: 'John', address: { street: '123 Main St', zip: '10001' }, hobbies: [ 'reading', 'traveling' ] }
