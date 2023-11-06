// Magicians

const magicians= ["Harry Houdini", "David Blaine", "Teller", "Dynamo"];

const show_magicians = (magicians: string[]) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const make_great = (magicians: string[]) => {
    const great_magicians = magicians.map(magician => {
        return `The Great ${magician}`;
    }); 
    return great_magicians;
}

show_magicians(magicians);
show_magicians(make_great(magicians));