// Magicians

const magicians= ["Harry Houdini", "David Blaine", "Teller", "Dynamo"];

const show_magicians = (magicians: string[]) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const make_great = (magicians: string[]) => {
    magicians.forEach((magician, index) => {
        magicians[index] = "The Great " + magician;
        console.log(magicians[index]);
    });
}

// show_magicians(magicians);
make_great(magicians);