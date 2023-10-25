/*
Filename: ComplexCode.js
Content: This complex code performs various mathematical operations and includes more advanced programming concepts like recursion, closures, and error handling.
*/

// Recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Closure function that returns a function to calculate the power of a number
function power(base) {
  return function(exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
      result *= base;
    }
    return result;
  };
}

// Custom Error class to handle division by zero
class DivisionByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivisionByZeroError";
  }
}

// Function to divide two numbers, throwing a custom error if the divisor is zero
function divide(a, b) {
  if (b === 0) {
    throw new DivisionByZeroError("Division by zero is not allowed.");
  }
  return a / b;
}

// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return divide(sum, numbers.length);
}

// Main program
function main() {
  console.log("Factorial of 5:", factorial(5));

  const powerOfTwo = power(2);
  console.log("2 raised to the power of 5:", powerOfTwo(5));

  const numbers = [1, 2, 3, 4, 5];
  console.log("Average of numbers:", calculateAverage(numbers));
}

// Handle errors gracefully
try {
  main();
} catch (error) {
  console.error("An error occurred:", error.name, "-", error.message);
}