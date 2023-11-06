// Define a type for the guest list
type GuestList = string[];

// Create a guest list
const guests: GuestList = ["Alan Turing", "Marie Curie", "Tim Berners-Lee", "Stephen Hawking", "Hypatia", "Ibn Sina", "Tu Youyou", "Leonardo da Vinci", "Nikola Tesla", "Albert Einstein"];

// Get the number of people you are inviting to dinner
const numberOfGuests = guests.length;

// Print a message indicating the number of people you are inviting to dinner
console.log(`You are inviting ${numberOfGuests} people to dinner.`);
