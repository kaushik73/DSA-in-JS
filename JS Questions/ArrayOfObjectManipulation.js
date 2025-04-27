// 1. Sort users by age in ascending order
const users = [
  { name: "Eve", age: 35 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
];
// the below code will not change the original array
// it will create a new array and sort it
const sortedUsers = users
  .map((user) => ({ ...user }))
  .sort((a, b) => a.age - b.age);

// the below code will change the original array
// it will create a new array and sort it but object will be same as they are reference type
const sortedUsers2 = users.sort((a, b) => a.age - b.age);

users[0].name = "Manan";
sortedUsers[1].name = "Kaushik";

console.log(users);
console.log(sortedUsers);

/* [
    { name: 'Manan', age: 25 },
    { name: 'Charlie', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 35 }
  ]
  [
    { name: 'Alice', age: 25 },
    { name: 'Kaushik', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 35 }
  ] */

// 2. Filter users older than 28
const filteredUsers = users.filter((user) => user.age > 28);
console.log(filteredUsers);
//3. Find the first user with age 25
const firstUser = users.find((user) => user.age === 25);
console.log(firstUser);

// 4. Check if all users are above 20
const allAbove20 = users.every((user) => user.age > 20);
console.log(allAbove20); // true

// 5. Check if there is at least one user named "Alice"
const hasAlice = users.some((user) => user.name === "Alice");
console.log(hasAlice); // true

// 6. Get an array of all user names
const userNames = users.map((user) => user.name);
console.log(userNames);

// 7. Group users by age
const groupedUsers = {};

users.forEach((user) => {
  if (!groupedUsers[user.age]) {
    groupedUsers[user.age] = [];
  }
  groupedUsers[user.age].push(user);
});

console.log(groupedUsers);

// 8. Get the sum of all users' ages
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge);

// 9. Find the user with the highest age
const oldestUser = users.reduce(
  (max, user) => (user.age > max.age ? user : max),
  users[0]
);

console.log(oldestUser);

let res = users[0];

for (let x in users) {
  if (x.age > res.age) res = x;
}

console.log(res, "res");

// 10. Remove duplicate ages from the array
const uniqueAges = [...new Set(users.map((user) => user.age))];
console.log(uniqueAges);
