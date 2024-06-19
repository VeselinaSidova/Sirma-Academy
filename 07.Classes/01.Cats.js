class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says meow`);
    }
}

function solve(input) {
    const cats = [];

    for (const line of input) {
        const [name, ageString] = line.split(' ');
        const age = Number(ageString)
        cats.push(new Cat(name, Number(age)));
    }

    for (const cat of cats) {
        cat.meow();
    }
}


solve(['Mellon 2', 'Tom 3']);
solve(['Branch 1', 'Poppy 3', 'Goldy 2']);

