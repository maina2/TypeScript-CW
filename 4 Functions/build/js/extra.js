"use strict";
// 1. Basic Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
// 2. Arrow Functions
const add = (a, b) => a + b;
// 3. Optional and Default Parameters
function displayInfo(name, age, country = "Unknown") {
    if (age) {
        return `${name} is ${age} years old and lives in ${country}.`;
    }
    else {
        return `${name} lives in ${country}.`;
    }
}
// 4. Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// 5. Return Types
function calculateCircleArea(radius) {
    const PI = 3.14;
    return PI * radius * radius;
}
function formatInput(input) {
    if (typeof input === "string") {
        return input.trim().toUpperCase();
    }
    else {
        return `Number: ${input}`;
    }
}
// 7. Callback Functions
function fetchData(url, callback) {
    // Simulate fetching data
    setTimeout(() => {
        const data = `Data from ${url}`;
        callback(data);
    }, 2000);
}
// 8. Generic Functions
function reverseArray(items) {
    return items.reverse();
}
// Usage examples
console.log(greet("Alice")); // "Hello, Alice!"
console.log(add(5, 10)); // 15
console.log(displayInfo("Bob")); // "Bob lives in Unknown."
console.log(displayInfo("Carol", 25)); // "Carol is 25 years old and lives in Unknown."
console.log(displayInfo("Dave", 30, "USA")); // "Dave is 30 years old and lives in USA."
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(calculateCircleArea(10)); // 314
console.log(formatInput("   Hello World  ")); // "HELLO WORLD"
console.log(formatInput(42)); // "Number: 42"
fetchData("https://api.example.com", (data) => {
    console.log(data); // "Data from https://api.example.com"
});
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); // [5, 4, 3, 2, 1]
const strings = ["apple", "banana", "cherry"];
const reversedStrings = reverseArray(strings);
console.log(reversedStrings); // ["cherry", "banana", "apple"]
