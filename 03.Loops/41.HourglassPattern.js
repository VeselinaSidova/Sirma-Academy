function printHourglass(n) {
    let hourglass = '';

    if (n % 2 === 0) {
        for (let i = 0; i < n + 1; i++) {
            if (i === 0 || i === n) {
                for (let j = 0; j < n + 2; j++) {
                    hourglass += '#';
                }
            } else {
                if (i <= n / 2) {
                    for (let j = 0; j <= n; j++) {
                        if (j === i || j === n - i + 1) {
                            hourglass += '#';
                        } else {
                            hourglass += ' ';
                        }
                    }
                } else {
                    for (let j = 0; j <= n; j++) {
                        if (j === n - i || j === i + 1) {
                            hourglass += '#';
                        } else {
                            hourglass += ' ';
                        }
                    }
                }
            }

            hourglass += '\n';
        }
    } else {
        for (let i = 0; i < n + 2; i++) {
            if (i === 0 || i === n + 1) {
                for (let j = 0; j < n + 2; j++) {
                    hourglass += '#';
                }
            } else {
                for (let j = 0; j <= n; j++) {
                    if (j === i || j === n - i + 1) {
                        hourglass += '#';
                    } else {
                        hourglass += ' ';
                    }
                }
            }
            hourglass += '\n';
        }
    }

    console.log(hourglass);
}

printHourglass(5);
printHourglass(8);
printHourglass(2);