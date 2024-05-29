function convertJSONToObject(input) {
    let obj = JSON.parse(input);

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

convertJSONToObject('{"name": "Ivan", "age": 40, "town": "Sofia"}');
convertJSONToObject('{"firstName": "Ivan", "lastName": "Ivanov"}');