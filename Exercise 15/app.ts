// Define a type for the guest list
type GuestList = string[];

// Create a guest list
const guests: GuestList = ["Alan Turing", "Marie Curie", "Tim Berners-Lee", "Stephen Hawking", "Hypatia", "Ibn Sina", "Tu Youyou"];

// Print a statement stating that you found a bigger dinner table
console.log("I found a bigger dinner table!");

// Add one new guest to the beginning of the array
guests.unshift("Leonardo da Vinci");

// Add one new guest to the middle of the array
guests.splice(3, 0, "Nikola Tesla");

// Use append() to add one new guest to the end of the list
guests.push("Albert Einstein");

// Print a new set of invitation messages, one for each person in the list
for (const guest of guests) {
  console.log(`Dear ${guest},`);
  console.log(`I'm excited to let you know that I found a bigger dinner table, so now there's room for everyone!`);
  console.log(`Please let me know if you're still able to attend.`);
  console.log("Sincerely,");
  console.log("Ali");
}
