const obj = {
  name: "Alice",
  age: 25,
};

const arr = ["a", "b", "c"];

Object.defineProperty(obj, "kaushik", {
  value: "73",
  enumerable: true,
});

for (let key in obj) {
  console.log(key); // Outputs: name, age, kaushik
}
console.log("--------------------");

Object.keys(obj).forEach((key) => {
  console.log(key); // Outputs: name, age, kaushik
});

console.log("--------------------");

Array.prototype.another = "d";

for (let item in arr) {
  console.log(item); // 0 , 1, 2, another
}
console.log("--------------------");

for (let item of arr) {
  console.log(item); // 0 , 1, 2, another
}

/*

When you use a  loop to iterate over an array, it enumerates all enumerable properties of the array, including inherited properties from the prototype chain. 


JavaScript objects (including arrays) have a prototype chain. Properties and methods defined on the prototype are inherited by all instances of that object.


In above example, Array.prototype.another = 'd'; adds an enumerable property to the Array prototype.

*/
