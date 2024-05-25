function printSunglasses(n) {
    let sunglasses = '';
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            for (let j = 1; j <= (4 * n) + n; j++) {
                if (j > 2 * n && j <= (2 * n) + n) {
                    sunglasses += ' ';
                } else {
                    sunglasses += '*';
                }
            }
        } else {
            sunglasses += '*';
            for (let j = 1; j <= (4 * n) + n - 2; j++) {
                if (j <= (2 * n) - 2) {
                    sunglasses += '/';
                } else if (j === (2 * n) - 1 || j === (2 * n) + n) {
                    sunglasses += '*';
                } else if (j <= (2 * n) + n - 1) {
                    if (i === Math.floor(n / 2) && n % 2 !== 0) {
                        sunglasses += '|';
                    } else if (i === Math.floor(n / 2) - 1 && n % 2 === 0) {
                        sunglasses += '|';
                    } else {
                        sunglasses += ' ';
                    }
                } else {
                    sunglasses += '/';
                }
            }
            sunglasses += '*';
        }
        if (i < n - 1) {
            sunglasses += '\n';
        }
    }
    console.log(sunglasses);
}

printSunglasses(3);
printSunglasses(4);
printSunglasses(5);
printSunglasses(6);