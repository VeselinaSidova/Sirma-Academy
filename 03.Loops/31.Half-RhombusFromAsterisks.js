function printHalfRhombus(n) {
    let figure = '';

    if (n === 1) {
        figure = '*'
    } else {
        // upper side
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                figure += '* ';
            }
            figure += '\n';
        }
        // lower side
        for (let i = n - 1; i >= 1; i--) {
            for (let j = i; j >= 1; j--) {
                figure += '* ';
            }
            if (i > 1) {
                figure += '\n';
            }
        }
    }

    console.log(figure);
}

printHalfRhombus(1);
printHalfRhombus(2);
printHalfRhombus(3);
printHalfRhombus(4);

