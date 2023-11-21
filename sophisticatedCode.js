/* 
Filename: sophisticatedCode.js
Content: Example of a sophisticated JavaScript code
*/

// Class for creating a person object
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

// Interface for generating random numbers
const RandomGenerator = {
  generate(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};

// Generate an array of 100 random numbers
const randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(RandomGenerator.generate(1, 100));
}

// Sort the random numbers in descending order
randomNumbers.sort((a, b) => b - a);

// Print the sorted random numbers
console.log("Sorted random numbers:");
console.log(randomNumbers);

// Create an array of person objects
const people = [
  new Person("John", "Doe", 25),
  new Person("Jane", "Smith", 32),
  new Person("Mike", "Johnson", 45),
  new Person("Emily", "Davis", 19),
  new Person("Chris", "Wilson", 27),
];

// Filter the people array to get only the adults
const adults = people.filter((person) => person.isAdult());

// Print the full names of the adults
console.log("Adults in the people array:");
adults.forEach((person) => console.log(person.getFullName()));

// Calculate the sum of the ages of the adults
const sumOfAges = adults.reduce((sum, person) => sum + person.age, 0);

// Print the sum of the ages
console.log("Sum of ages of adults:", sumOfAges);

// Class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(other) {
    const realPart = this.real + other.real;
    const imaginaryPart = this.imaginary + other.imaginary;
    return new ComplexNumber(realPart, imaginaryPart);
  }

  multiply(other) {
    const realPart =
      this.real * other.real - this.imaginary * other.imaginary;
    const imaginaryPart =
      this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(realPart, imaginaryPart);
  }
}

// Create two complex numbers
const complexNumber1 = new ComplexNumber(2, 3);
const complexNumber2 = new ComplexNumber(4, -1);

// Add the two complex numbers
const sumComplexNumbers = complexNumber1.add(complexNumber2);

// Print the sum of the complex numbers
console.log("Sum of complex numbers:", sumComplexNumbers);

// Multiply the two complex numbers
const productComplexNumbers = complexNumber1.multiply(complexNumber2);

// Print the product of the complex numbers
console.log("Product of complex numbers:", productComplexNumbers);