function convertToJSON(name, surname, eyeColor) {
    let person = { name, surname, eyeColor };
    let json = JSON.stringify(person);
    console.log(json);
}

convertToJSON("Ivan", "Ivanov", "blue");
convertToJSON("Maria", "Petrova", "brown");