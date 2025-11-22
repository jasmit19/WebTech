// multiply.js

function multiplyIfPositive(a, b) {
  return new Promise((resolve, reject) => {
    if (a > 0 && b > 0) {
      resolve(a * b);
    } else {
      reject("Both numbers must be positive.");
    }
  });
}

const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);

multiplyIfPositive(num1, num2)
  .then(result => {
    console.log(`Multiplication result: ${result}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
  
