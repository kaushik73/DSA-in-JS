function deepclone(obj) {
  if (obj == null || typeof obj !== "object") return obj;

  //handle array
  if (Array.isArray(obj)) {
    return obj.map((item) => deepclone(item));
  }

  //handle Object
  const copy = {};
  for (const key in obj) {
    copy[key] = deepclone(obj[key]);
  }
  return copy;
}

/*
Shallow VS Deep Copy :

1. Objects are copied by reference and variables by value.
2. To copy objects by value:

==>Object.Assign({}, obj)

==>{...obj}

1. The above method is shallow copy. It copies only top-level fields.
2. To copy nested objects, deep copy comes into picture.

==>JSON.parse(JSON.stringify(obj));

1. But the above doesn’t copy functions and dates. So, loadash is used.

==>_.cloneDeep(obj)

*/
