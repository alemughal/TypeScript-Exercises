// Describe City

const city_country = (city: string, country: string): string => {
  return `${city}, ${country}`;
}

console.log(city_country('Islamad', 'Pakistan'));
console.log(city_country('New York', 'America'));
console.log(city_country('London', 'England'));