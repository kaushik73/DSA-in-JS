//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers

function getEvenNumbers1(arr) {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.push(num);
    }
    return acc;
  }, []);
}

// The filter method creates a new array with all elements that pass the test implemented by the provided function.
function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getEvenNumbers(numbers));
