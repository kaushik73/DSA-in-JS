const groupBy = (arr, key) =>
  arr.reduce((result, obj) => {
    (result[obj[key]] = result[obj[key]] || []).push(obj);
    return result;
  }, {});

function groupBy2(arr, key) {
  return arr.reduce((result, obj) => {
    const groupKey = obj[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(obj);
    return result;
  }, {});
}

const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
console.log(groupBy(data, "age"));
// Output: { '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }], '30': [{ name: 'Bob', age: 30 }] }
