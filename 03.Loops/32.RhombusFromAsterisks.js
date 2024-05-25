function printRhombus(n) {
    let rhombus = '';

    if (n === 1) {
        rhombus = '*'
    } else {
        // upper side
        for (let i = 1; i <= n; i++) {
            for (let j = i; j < n; j++) {
                rhombus += ' ';
            }

            for (let j = 1; j <= i; j++) {
                rhombus += '* ';
            }
            rhombus += '\n';
        }
        // lower side
        for (let i = n - 1; i >= 1; i--) {
            for (let j = n; j > i; j--) {
                rhombus += ' ';
            }

            for (let j = i; j >= 1; j--) {
                rhombus += '* ';
            }
            if (i > 1) {
                rhombus += '\n';
            }
        }
    }
    console.log(rhombus);
}

printRhombus(1);
printRhombus(2);
printRhombus(3);
printRhombus(4);
