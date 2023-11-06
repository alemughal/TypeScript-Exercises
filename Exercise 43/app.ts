// Sanwiches

const make_sandwich = ([...ingredients]: string[]) => {
    console.log(`Your ${ingredients} Sandwich is ready!`);
}


make_sandwich(['bread', 'cheese', 'ham', 'ketchup']);
make_sandwich(['bread', 'cheese', 'mayonise']);
make_sandwich(['bread', 'ham', 'bread']);
make_sandwich(['bread', 'cheese', 'lettuce', 'tomato', 'mayonise', 'ham', 'bread']);