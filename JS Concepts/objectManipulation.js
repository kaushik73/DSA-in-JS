function flattenObject(obj) {
  let ans = {};
  let parentKey = "";
  return flatten(obj, ans, parentKey);
}

const flatten = (obj, ans, parentKey) => {
  for (let key in obj) {
    let fullKey = parentKey ? `${parentKey}.${key}` : key;
    let value = obj[key];
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // Only recurse if it's a non-null object and not an array
      flatten(value, ans, fullKey);
    } else {
      ans[fullKey] = value;
    }
  }
  return ans;
};

const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
}; // Output Needed : { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

console.log(
  "ans",
  flattenObject({
    a: null,
    d: undefined,
    e: { f: 5 },
    g: { h: null },
  })
);
// Output:
// {
//   a: null,
//   d: undefined,
//   "e.f": 5,
//   "g.h": null
// }

//------------------------------------------------------------------------------------------
// Example usage
let obj = {
  a: ["4", "2", "3"],
  b: ["4", "3"],
  c: ["3"],
};

/*
    {
        "4":["a","b"],
        "2":["a"],
        "3":["a","b","c"]
    }

*/

function invert(obj) {
  let res = {};
  for (let key in obj) {
    for (let val of obj[key]) {
      if (!res[val]) {
        res[val] = [];
      }
      res[val].push(key);
    }
  }
  return res;
}
