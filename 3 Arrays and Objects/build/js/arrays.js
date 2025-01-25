"use strict";
// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];
// Add a new number to the array
numbers.push(6);
// Remove the last number from the array
let removedNumber = numbers.pop();
console.log("Removed Number:", removedNumber); // Output: Removed Number: 6
// Iterate through the array
numbers.forEach((num) => console.log("Number:", num));
// Create an array of strings
let fruits = ["Apple", "Banana", "Cherry"];
// Use the map method to create a new array
let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Uppercase Fruits:", upperFruits); // Output: Uppercase Fruits: [ 'APPLE', 'BANANA', 'CHERRY' ]
