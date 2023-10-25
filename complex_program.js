/* complex_program.js */

// This complex program calculates the sum of even Fibonacci numbers up to a given limit

// Function to calculate the sum of even Fibonacci numbers up to a given limit
function sumEvenFibonacci(limit) {
  let prevNum = 1; // previous Fibonacci number
  let currNum = 2; // current Fibonacci number

  let sum = 0; // total sum of even Fibonacci numbers
  
  while (currNum <= limit) {
    if (currNum % 2 === 0) { // check if the current number is even
      sum += currNum; // add the even number to the total sum
    }
    
    // generate the next Fibonacci number
    let nextNum = prevNum + currNum;
    prevNum = currNum;
    currNum = nextNum;
  }

  return sum;
}

// Example usage
const limit = 1000000;
const result = sumEvenFibonacci(limit);
console.log("The sum of even Fibonacci numbers up to", limit, "is:", result);

// Output:
// The sum of even Fibonacci numbers up to 1000000 is: 1089154