// Write a JavaScript function to check if a given number is prime.

function isPrimeRecursive(n, i = 2) {
  if (n <= 2) return n === 2;
  if (n % i === 0) return false;
  if (i * i > n) return true;
  return isPrimeRecursive(n, i + 1);
}

function isPrimeBasic(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrimeBasic(1)); // false
console.log(isPrimeBasic(2)); // true
console.log(isPrimeBasic(3)); // true
console.log(isPrimeBasic(4)); // false
console.log(isPrimeBasic(5)); // true
