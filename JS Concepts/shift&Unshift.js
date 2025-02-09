// unshift() adds elements to the beginning, while shift() removes an element from the beginning.
// unshift() returns the new length of the array, while shift() returns the removed element.

// POP VS shift   => returns the removed element
// PUSH VS unshift    => returns length of the array

let arr7 = [1, 2, 3, 4, 5];
rotateArray(arr7, 2);

function rotateArray(arr, steps) {
  for (let i = 0; i < steps; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
console.log(arr7); // Output: [4, 5, 1, 2, 3]

// Another way to rotate an array
let arr6 = [1, 2, 3, 4, 5];
rotateArray2(arr6, 2);

function rotateArray2(arr, steps) {
  for (let i = 0; i < steps; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
console.log(arr7); // Output: [ 3, 4, 5, 1, 2 ]

// remove the first element , add 2 and 3 at the beginning
let arr = [5, 10, 15, 20];
arr.shift();
arr.unshift(2, 3);
console.log(arr); // Output: [2, 3, 10, 15, 20]

// Implement a queue using an array
let queue = [];
const enqueue = (queue, el) => queue.push(el);
const dequeue = (el) => el.shift();

enqueue(queue, 1);
enqueue(queue, 2);
console.log(dequeue(queue)); // Should return 1
console.log(queue); // Should show [2]

// Implement a history list which maintains the last 5 pages visited.
addToHistory = (history, str) => {
  if (history.length >= 5) {
    history.pop();
  }
  history.unshift(str);
};

let history = [];
addToHistory(history, "Page 1");
addToHistory(history, "Page 2");
addToHistory(history, "Page 3");
addToHistory(history, "Page 4");
addToHistory(history, "Page 5");
addToHistory(history, "Page 6"); // Removes 'Page 1'
console.log(history);
