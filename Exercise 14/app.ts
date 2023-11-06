// Define a type for the guest list
type GuestList = string[];

// Create a guest list
const guests: GuestList = ["Alan Turing", "Marie Curie", "Neil Armstrong", "Stephen Hawking"];

// Print a statement stating the name of the guest who can't make it
console.log("Neil Armstrong cannot make it to dinner.");

// Replace the name of the guest who can't make it with the name of the new person you are inviting
guests[2] = "Tim Berners-Lee";

// Print a second set of invitation messages, one for each person who is still in your list
for (const guest of guests) {
  console.log(`Dear ${guest},`);
  console.log(`I would be honored if you would join me for dinner.`);
  console.log("Please let me know if you are able to attend.");
  console.log("Sincerely,");
  console.log("Ali");
}
