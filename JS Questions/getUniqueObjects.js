// Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}

function getUniqueObjects1(arr) {
  let uniqueArray = [];
  let uniqueObject = {};
  arr.forEach((obj) => {
    let key = JSON.stringify(obj);
    if (!uniqueObject[key]) {
      uniqueObject[key] = true;
      uniqueArray.push(obj);
    }
  });
  return uniqueArray;
}

function getUniqueObjects2(arr) {
  const uniqueNames = new Set();
  const uniqueArray = [];

  for (const obj of arr) {
    if (!uniqueNames.has(obj.name)) {
      uniqueNames.add(obj.name);
      uniqueArray.push(obj);
    }
  }
  return uniqueArray;
}

function getUniqueObjects(arr) {
  const uniqueNames = new Set(arr.map((obj) => obj.name));
  const uniqueArray = [];

  for (const name of uniqueNames.values()) {
    uniqueArray.push(arr.find((obj) => obj.name === name));
  }
  return uniqueArray;
}

// Example usage
const inputArray = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];

console.log(getUniqueObjects(inputArray));
// Output: [{name: "sai"},{name:"Nang"},{name: "111111"}]
