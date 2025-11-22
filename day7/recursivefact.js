function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
 return n * factorial(n - 1);
}

const num = parseInt(process.argv[2], 10);

if (isNaN(num) || num < 0) {
  console.log("provide a non-negative integer. Example: node factorial.js 5");
} else {
  const result = factorial(num);
  console.log(`The factorial of ${num} is: ${result}`);
}
