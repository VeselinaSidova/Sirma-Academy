function createPerson(name, surname, age) {
    let person = {
        name,
        surname,
        age,
    }
    return person;
}

console.log(createPerson("Ivan", "Ivanov", 29));
console.log(createPerson("Maria", "Marinova", 13));