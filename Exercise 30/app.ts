// Exercise 28: User Checker

const users: string[] = [];  // Your list of users (can be populated with user data)

// Check if the list of users is not empty
if (users.length > 0) {
    for (const user of users) {
        if (user === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + user + ", thank you for logging in again.");
        }
    }
} else {
    console.log("We need to find some users!");
}
