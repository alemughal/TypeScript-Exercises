// Shirt Making

const make_shirt = (size: string = "large", message: string = "I love Typescript"): void => {
  console.log(`Size: ${size}, Message: ${message}`);
};


// Making Large Shirt
make_shirt();

// Making Medium Shirt
make_shirt("medium");

// Making Small Shirt

make_shirt("small", "I love Javascript");