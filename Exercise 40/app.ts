// Magicians

const magicians= ["Harry Houdini", "David Blaine", "Teller", "Dynamo"];

const show_magicians = (magicians: string[]) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);