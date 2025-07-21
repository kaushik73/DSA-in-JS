function JSONStringify(value, res = "") {
  // Handle primitives
  if (value === null) return "null";
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "number" || typeof value === "boolean")
    return String(value);

  // Handle arrays
  if (Array.isArray(value)) {
    const result = value.map((item) => {
      if (item === undefined || typeof item === "function") {
        return "null"; // JSON.stringify replaces these with null in arrays
      }
      return JSONStringify(item);
    });
    return `[${result.join(",")}]`;
  }

  // Handle objects
  if (typeof value === "object") {
    const entries = Object.entries(value).reduce((acc, [key, val]) => {
      if (val !== undefined && typeof val !== "function") {
        acc.push(`"${key}":${JSONStringify(val)}`);
      }
      return acc;
    }, []);
    return `{${entries.join(",")}}`;
  }

  return undefined;
}
// Example usage
console.log(
  JSONStringify({
    name: "John",
    age: 30,
    hobbies: ["reading", "traveling"],
    address: { city: "New York" },
  })
);
// Output: {"name":"John","age":30,"hobbies":["reading","traveling"],"address":{"city":"New York"}}

// Example usage
console.log(
  JSONStringify([1, "hello", null, { key: "value" }, undefined, function () {}])
);
// Output: [1,"hello",null,{"key":"value"},null,null]
