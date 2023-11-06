// Checking Usernames   

const current_users:string[] = ["admin","ali","daniyal","asad","hassan"];

const new_users:string[] = ["ali","Daniyal","hassan","ahmed","kashif"].map(user => user.toLowerCase());

for(const new_user of new_users){
    if(current_users.includes(new_user)){
        console.log(`Sorry ${new_user} already exists`);
    }else{
        current_users.push(new_user);
        console.log(`Congratulation ${new_user} username is available`);
    }
}