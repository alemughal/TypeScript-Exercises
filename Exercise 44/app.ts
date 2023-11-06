interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

const createCar = (manufacturer: string, model: string, options?: Omit<Car, 'manufacturer' | 'model'>): Car => {
    const car: Car = {
        manufacturer,
        model,
        ...options
    };
    return car;
}

const carDetails: Car = createCar("Toyota", "Corolla", {
    color: "Blue",
    year: 2023,
    optionalFeature: "Navigation"
});

// Print the object to verify the stored information
console.log(carDetails);
