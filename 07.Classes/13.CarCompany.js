class CarRegister {
    constructor() {
        this.register = {};
    }

    addCar(brand, model, producedCars) {
        if (!this.register[brand]) {
            this.register[brand] = {};
        }

        if (!this.register[brand][model]) {
            this.register[brand][model] = 0;
        }

        this.register[brand][model] += Number(producedCars);
    }

    generateReport() {
        for (const brand in this.register) {
            console.log(brand);
            for (const model in this.register[brand]) {
                console.log(`###${model} -> ${this.register[brand][model]}`);
            }
        }
    }
}


function solve(input) {
    const carRegister = new CarRegister();

    input.forEach(line => {
        const [brand, model, producedCars] = line.split(' | ');
        carRegister.addCar(brand, model, producedCars);
    });

    carRegister.generateReport();
}



solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
