// pattern.js

const input = parseInt(process.argv[2]);

function printPattern(n) {
  for (let i = n; i >= 1; i--) {
    console.log('* '.repeat(i).trim());
  }
}

try {
  if (isNaN(input) || input < 1 || input > 5) {
    throw new Error("Invalid input! Please enter a number between 1 and 5.");
  }
  printPattern(input);
} catch (err) {
  console.error("Error:", err.message);
}
