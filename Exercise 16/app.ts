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


// Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("Sorry to say that, I can invite only two people for dinner")

// Remove guests from your list one at a time until only two names remain in your list

while(guests.length > 2){
  const guest = guests.pop();

  console.log(`Dear ${guest},`);
  console.log(`I am so sorry to inform you that I will not be able to invite you to dinner. I have had to reduce the size of my guest list, and unfortunately, your name was one of the ones that had to be removed.`);
  console.log(`I hope you understand. I am truly disappointed that I will not be able to spend time with you on this occasion.`);
  console.log(`Sincerely,`);
  console.log(`Ali`);
}

//  Print a message to each of the two people still on your list, letting them know they’re still invited.

for (const guest of guests) {
  console.log(`Dear ${guest},`);
  console.log(`I am writing to confirm that you are still invited to dinner. I had to reduce the size of my guest list, but you are one of my most important guests. I am so excited to have you join me.`);
  console.log("Sincerely,");
  console.log("Ali");
}

// Empty List

guests.pop();
guests.pop();

console.log(guests);