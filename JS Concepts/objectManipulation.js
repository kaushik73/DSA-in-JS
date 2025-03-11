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
};

// Output: { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

function flattenObject(obj, parentKey = "", res = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const propName = `${parentKey}${key}`;
      if (typeof obj[key] === "object") {
        flattenObject(obj[key], propName + ".", res);
      } else {
        res[propName] = obj[key];
      }
    }
  }
  return res;
}

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
