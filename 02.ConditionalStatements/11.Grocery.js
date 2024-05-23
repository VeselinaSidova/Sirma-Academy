function solve(product, city, quantity) {
    let price = 0;
    switch (product) {
        case 'tea':
            if (city === 'Sofia') {
                price = 0.50;
            } else if (city === 'Plovdiv') {
                price = 0.40;
            } else if (city === 'Varna') {
                price = 0.45;
            }
            break;
        case 'water':
            if (city === 'Sofia') {
                price = 0.80;
            } else if (city === 'Plovdiv' || city === 'Varna') {
                price = 0.70;
            }
            break;
        case 'juice':
            if (city === 'Sofia') {
                price = 1.20;
            } else if (city === 'Plovdiv') {
                price = 1.15;
            } else if (city === 'Varna') {
                price = 1.10;
            }
            break;
        case 'sweets':
            if (city === 'Sofia') {
                price = 1.45;
            } else if (city === 'Plovdiv') {
                price = 1.30;
            } else if (city === 'Varna') {
                price = 1.35;
            }
            break;
        case 'chips':
            if (city === 'Sofia') {
                price = 1.60;
            } else if (city === 'Plovdiv') {
                price = 1.50;
            } else if (city === 'Varna') {
                price = 1.55;
            }
            break;
    }
    let totalPrice = quantity * price;
    console.log(totalPrice.toFixed(2));
}

solve("tea", "Varna", 2);
solve("chips", "Plovdiv", 1);
solve("juice", "Sofia", 6);
solve("sweets", "Plovdiv", 1);
