// Favourite Fruits

const usernames:string[] = ["admin","ali","hamza","asad","hanan"];

// Loop through the array and print a greeting to each user

for(const username of usernames){
    if(username === "admin"){
        console.log(`Hello ${username},would you like to see a status report?`)
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`)
    }
}
