function computeAmount() {
  let total = 0;

  return {
    lacs(value) {
      total += value * 100000;
      return this; // enable chaining
    },
    crore(value) {
      total += value * 10000000;
      return this; // enable chaining
    },
    value() {
      return total;
    },
  };
}
// Example usage:
console.log(
  computeAmount()
    .lacs(15) // 15 * 100000 = 1,500,000
    .crore(5) // 5 * 10000000 = 50,000,000
    .value() // Total = 51,500,000
);

// ✅ Output: 51500000
