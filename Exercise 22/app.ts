let car = 'subaru';
let number = 42;
let language = 'JavaScript';
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru' ? true : false);

console.log("Is language != 'Python'? I predict True.");
console.log(language != 'Python' ? true : false);

// Tests using the lower case function
console.log("Is language.toLowerCase() == 'javascript'? I predict True.");
console.log(language.toLowerCase() == 'javascript' ? true : false);

// Numerical tests
console.log("Is number > 50? I predict False.");
console.log(number > 50 ? true : false);

console.log("Is number <= 40? I predict True.");
console.log(number <= 40 ? true : false);

// Tests using "and" and "or" operators
console.log("Is car == 'subaru' and number == 42? I predict True.");
console.log(car == 'subaru' && number == 42 ? true : false);

console.log("Is car == 'toyota' or number == 50? I predict False.");
console.log(car == 'toyota' || number == 50 ? true : false);

// Test whether an item is in an array
let fruitToCheck = 'banana';
console.log(`Is ${fruitToCheck} in the fruits array? I predict True.`);
console.log(fruits.includes(fruitToCheck) ? true : false);

// Test whether an item is not in an array
let fruitToAvoid = 'melon';
console.log(`Is ${fruitToAvoid} not in the fruits array? I predict False.`);
console.log(!fruits.includes(fruitToAvoid) ? true : false);
