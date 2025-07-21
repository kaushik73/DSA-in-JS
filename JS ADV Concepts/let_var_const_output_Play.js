// --- Scenario 1: Basic Block Scope ---
{
  let a = 10;
  var b = 20;
  const c = 30;
  console.log("Inside block:");
  console.log("a (inside):", a); // Output: a (inside): 10
  console.log("b (inside):", b); // Output: b (inside): 20
  console.log("c (inside):", c); // Output: c (inside): 30
}
console.log("Outside block (after first block):");
// console.log(a); // Output: ReferenceError: a is not defined (let is block-scoped)
console.log("b (outside):", b); // Output: b (outside): 20 (var is function/global-scoped)
// console.log(c); // Output: ReferenceError: c is not defined (const is block-scoped)

console.log("\n--- Scenario 2: Global vs. Function Scope ---");
let globalLet = "I am a global let";
var globalVar = "I am a global var";
const globalConst = "I am a global const";

function showScope() {
  let functionLet = "I am a function let";
  var functionVar = "I am a function var";
  const functionConst = "I am a function const";

  console.log("Inside showScope():");
  console.log("globalLet:", globalLet); // Output: globalLet: I am a global let
  console.log("globalVar:", globalVar); // Output: globalVar: I am a global var
  console.log("globalConst:", globalConst); // Output: globalConst: I am a global const
  console.log("functionLet:", functionLet); // Output: functionLet: I am a function let
  console.log("functionVar:", functionVar); // Output: functionVar: I am a function var
  console.log("functionConst:", functionConst); // Output: functionConst: I am a function const

  {
    // Nested block inside function
    let nestedLet = "I am a nested let";
    var nestedVar = "I am a nested var"; // Still function-scoped
    const nestedConst = "I am a nested const";
    console.log("  Inside nested block:");
    console.log("  nestedLet:", nestedLet); // Output: nestedLet: I am a nested let
    console.log("  nestedVar:", nestedVar); // Output: nestedVar: I am a nested var
    console.log("  nestedConst:", nestedConst); // Output: nestedConst: I am a nested const
  }
  // console.log("  nestedLet (outside nested block):", nestedLet); // ReferenceError: nestedLet is not defined
  console.log("  nestedVar (outside nested block):", nestedVar); // Output: nestedVar: I am a nested var
  // console.log("  nestedConst (outside nested block):", nestedConst); // ReferenceError: nestedConst is not defined
}

showScope();

console.log("Outside showScope():");
console.log("globalLet:", globalLet); // Output: globalLet: I am a global let
console.log("globalVar:", globalVar); // Output: globalVar: I am a global var
console.log("globalConst:", globalConst); // Output: globalConst: I am a global const
// console.log(functionLet);    // ReferenceError: functionLet is not defined
// console.log(functionVar);    // ReferenceError: functionVar is not defined
// console.log(functionConst);  // ReferenceError: functionConst is not defined

console.log("\n--- Scenario 3: Hoisting and Temporal Dead Zone (TDZ) ---");
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization (TDZ for let)
// let hoistedLet = "I am let";

console.log("hoistedVar:", hoistedVar); // Output: hoistedVar: undefined (var is hoisted and initialized with undefined)
var hoistedVar = "I am var";
console.log("hoistedVar (after declaration):", hoistedVar); // Output: hoistedVar (after declaration): I am var

// console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization (TDZ for const)
// const hoistedConst = "I am const";

console.log("\n--- Scenario 4: Re-declaration and Re-assignment ---");
var reDeclareVar = 10;
console.log("reDeclareVar (initial):", reDeclareVar); // Output: reDeclareVar (initial): 10
var reDeclareVar = 20; // Legal: var can be re-declared
console.log("reDeclareVar (re-declared):", reDeclareVar); // Output: reDeclareVar (re-declared): 20
reDeclareVar = 30; // Legal: var can be re-assigned
console.log("reDeclareVar (re-assigned):", reDeclareVar); // Output: reDeclareVar (re-assigned): 30

let reDeclareLet = 10;
console.log("reDeclareLet (initial):", reDeclareLet); // Output: reDeclareLet (initial): 10
// let reDeclareLet = 20; // SyntaxError: Identifier 'reDeclareLet' has already been declared (let cannot be re-declared)
reDeclareLet = 30; // Legal: let can be re-assigned
console.log("reDeclareLet (re-assigned):", reDeclareLet); // Output: reDeclareLet (re-assigned): 30

const reDeclareConst = 10;
console.log("reDeclareConst (initial):", reDeclareConst); // Output: reDeclareConst (initial): 10
// const reDeclareConst = 20; // SyntaxError: Identifier 'reDeclareConst' has already been declared (const cannot be re-declared)
// reDeclareConst = 30; // TypeError: Assignment to constant variable. (const cannot be re-assigned)
console.log("reDeclareConst (still):", reDeclareConst); // Output: reDeclareConst (still): 10

console.log("\n--- Scenario 5: Loop Scope ---");
for (var i = 0; i < 3; i++) {
  // console.log("var i inside loop:", i); // Output: 0, 1, 2
}
console.log("var i outside loop:", i); // Output: var i outside loop: 3 (i is function/global-scoped)

for (let j = 0; j < 3; j++) {
  // console.log("let j inside loop:", j); // Output: 0, 1, 2
}
// console.log("let j outside loop:", j); // ReferenceError: j is not defined (j is block-scoped to the loop)

for (const k of [1, 2, 3]) {
  // console.log("const k inside loop:", k); // Output: 1, 2, 3
}
// console.log("const k outside loop:", k); // ReferenceError: k is not defined (k is block-scoped to each iteration)

// Common pitfall with var in loops (closures)
const functionsVar = [];
for (var m = 0; m < 3; m++) {
  functionsVar.push(function () {
    console.log("var m in closure:", m);
  });
}
console.log("\n--- Scenario 5.1: var in loop (closure pitfall) ---");
functionsVar[0](); // Output: var m in closure: 3 (m is 3 by the time functions run)
functionsVar[1](); // Output: var m in closure: 3
functionsVar[2](); // Output: var m in closure: 3

// Correct way with let in loops (closure)
const functionsLet = [];
for (let n = 0; n < 3; n++) {
  // 'n' is new for each iteration
  functionsLet.push(function () {
    console.log("let n in closure:", n);
  });
}
console.log("\n--- Scenario 5.2: let in loop (correct closure) ---");
functionsLet[0](); // Output: let n in closure: 0
functionsLet[1](); // Output: let n in closure: 1
functionsLet[2](); // Output: let n in closure: 2

console.log("\n--- Scenario 6: Shadowing ---");
let outer = "outer let";
var outerVar = "outer var";

function shadowExample() {
  let outer = "inner let"; // Shadows the global 'outer' let
  var outerVar = "inner var"; // Shadows the global 'outerVar' var

  console.log("Inside shadowExample():");
  console.log("outer:", outer); // Output: outer: inner let
  console.log("outerVar:", outerVar); // Output: outerVar: inner var
}
shadowExample();
console.log("Outside shadowExample():");
console.log("outer:", outer); // Output: outer: outer let (original global 'outer' is unaffected)
//var: Creates a new variable when declared inside a function (even if a global variable of the same name exists).
console.log("outerVar:", outerVar); // Output: outerVar: outer var (original global 'outerVar' is unaffected)

// Another shadowing example with var (less common, usually avoids issues due to function scope)
var globalX = "global X";
(function () {
  var globalX = "function scoped X"; // This is a new variable, not shadowing the global one
  console.log("Inside IIFE with var:", globalX); // Output: Inside IIFE with var: function scoped X
})();
console.log("Outside IIFE with var:", globalX); // Output: Outside IIFE with var: global X

console.log("\n--- Scenario 7: Conditional Block Scope ---");
if (true) {
  let conditionalLet = "I am in if block (let)";
  var conditionalVar = "I am in if block (var)";
  const conditionalConst = "I am in if block (const)";
  console.log("Inside if block:");
  console.log("conditionalLet:", conditionalLet); // Output: conditionalLet: I am in if block (let)
  console.log("conditionalVar:", conditionalVar); // Output: conditionalVar: I am in if block (var)
  console.log("conditionalConst:", conditionalConst); // Output: conditionalConst: I am in if block (const)
}
// console.log(conditionalLet);     // ReferenceError: conditionalLet is not defined
console.log("conditionalVar:", conditionalVar); // Output: conditionalVar: I am in if block (var)
// console.log(conditionalConst);   // ReferenceError: conditionalConst is not defined

console.log(
  "\n--- Scenario 8: No automatic semicolon insertion pitfalls with return ---"
);
// This is not directly about scope, but good for output questions.
function trickyReturn() {
  let x = 10;
  // return // If you put a newline here, it becomes return;
  // {
  //     value: x
  // }
}
// console.log(trickyReturn()); // Output: undefined if newline after return, otherwise {value: 10}
