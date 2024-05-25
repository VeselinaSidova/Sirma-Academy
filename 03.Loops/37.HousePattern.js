function printHouse(n) {
    let house = '';

    // print roof
    for (let i = 1; i <= Math.ceil(n / 2); i++) {
        for (let j = i; j < Math.ceil(n / 2); j++) {
            house += '  ';
        }

        for (let j = 1; j <= (i * 2) - 1; j++) {
            house += '* ';
        }
        house += '\n';
    }

    // print main

    for (let i = n / 2 + 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0 || j === n - 1) {
                house += '* ';
            } else {
                house += '  ';
            }
        }

        if (i < n - 1) {
            house += '\n';
        }
    }

    console.log(house);
}

printHouse(3);
printHouse(7);
