// factorial.js


function factorial(n) {
  if (n < 0) return undefined;         // Factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

const input = process.argv[2];
const num = parseInt(input);

if (isNaN(num)) {
  console.log("Please provide a valid number.");
} else {
  const result = factorial(num);
  console.log(`Factorial of ${num} is: ${result}`);
}
