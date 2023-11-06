// Define a type for the list of mountains
type MountainList = string[];

// Create a list of mountains
const mountains: MountainList = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];

// Print the list of mountains
console.log(mountains);


// International Error :Index 5 is out of bounds for array of length 5.

console.log(mountains[5]);

// Correct Error

console.log(mountains[3])