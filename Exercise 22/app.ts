// Define an array of places to visit
let placesToVisit: string[] = ["Islamabad", "Dubai", "New York", "Sydney", "Istanbul"];

// Print the array in its original order
console.log("Original order: ", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
let sortedArrAlphabetical: string[] = [...placesToVisit].sort();
console.log("Alphabetical order: ", sortedArrAlphabetical);

// Show that the original array is still in its original order
console.log("Original order: ", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
let sortedArrRevAlphabetical: string[] = [...placesToVisit].sort().reverse();
console.log("Reverse alphabetical order: ", sortedArrRevAlphabetical);

// Show that the original array is still in its original order
console.log("Original order: ", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order: ", placesToVisit);

// Reverse the order of the list again to get back to its original order
placesToVisit.reverse();
console.log("Original order: ", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order: ", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order: ", placesToVisit);
