// Evaluate: '2' == !'2'

// Step 1: Evaluate !'2'
// - '2' is a non-empty string, so it's truthy
// - !'2' => !truthy => false

// So the expression becomes: '2' == false

// Step 2: Loose equality (==) coercion
// - '2' (string) gets coerced to a number => 2
// - false gets coerced to 0

// Now comparing: 2 == 0 => false

console.log("2" == !"2"); // Output: false

// ========================
// Expression: [] == ![]
// ========================

// Step 1: Evaluate right-hand side ![]
// - [] is an empty array, which is a truthy value
// - ![] => !truthy => false

// So now the expression becomes: [] == false

// Step 2: Loose equality (==) coercion
// - [] gets coerced to a primitive (string/number)
//   → [].toString() => ""
// - false gets coerced to 0

// Final comparison: "" == 0
// - "" is coerced to 0
// - 0 == 0 => true

console.log([] == ![]); // Output: true

// ========================
// Expression: [] === ![]
// ========================

// Step 1: Evaluate ![]
// - As before, ![] => false

// Now comparing: [] === false

// === checks for strict equality:
// - [] is an object (type: 'object')
// - false is a boolean (type: 'boolean')

// Types are different → no coercion → result is false

console.log([] === ![]); // Output: false
