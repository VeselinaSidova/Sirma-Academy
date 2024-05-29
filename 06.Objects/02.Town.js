function printTownProperties(town) {
    for (const key in town) {
        console.log(`${key} -> ${town[key]}`);
    }
}

printTownProperties({
    name: "Sofia",
    population: 1234567,
    country: "Bulgaria",
    postcode: "1000"
}); 