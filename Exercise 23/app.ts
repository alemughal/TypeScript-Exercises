let car = "subaru";

// More Tests

// Equality Test
console.log("Is car == 'subaru' ? I predict true");
console.log(car == 'subaru');

// Inequality Test
console.log("Is car != 'subaru' ? I predict false");
console.log(car != 'subaru');

// Tests using the lower case function

console.log("Is car == 'subaru' ? I predict true");
console.log(car.toLowerCase() == 'subaru');

// Tests using the upper case function

console.log("Is car == 'subaru' ? I predict false");
console.log(car.toUpperCase() == 'subaru');

// Greater than
console.log("Is car > 'honda' ? I predict true");
console.log(car > 'honda');

// Less than
console.log("Is car < 'honda' ? I predict false");
console.log(car < 'honda');

// less than or equal to

console.log("Is car <= 'subaru' ? I predict true");
console.log(car <= 'subaru');

// greate than or equal to

console.log("Is car >= 'subaru' ? I predict true");
console.log(car >= 'subaru');

// And Operator

console.log("Is car >= 'subaru' && Is car <= 'subaru' ? I predict true ? I predict true")
console.log(car >= 'subaru' && car <= 'honda')

// OR Operator

console.log("Is car >= 'subaru' && Is car <= 'subaru' ? I predict true ? I predict true")
console.log(car >= 'subaru' || car <= 'subaru')

// Test whether an item is in a array

// Create an array
const numbers = [1, 2, 3, 4, 5];

// Check if the number 3 is in the array
const isThreeInArray = numbers.includes(3);

// Print the result
console.log("Checking Item in Array: " + isThreeInArray); // Output: true



// Test whether an item is not in an array
let fruits = ['apple', 'banana', 'mango', 'guava'];
let fruitToCheck = 'kiwi';
console.log(`Is ${fruitToCheck} not in the array? I predict True.`);
console.log(!fruits.includes(fruitToCheck)); // True