function printSquare(n) {
    let square = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            square += '* ';
        }
        if (i < n) {
            square += '\n';
        }
    }

    console.log(square);
}

printSquare(2);
printSquare(3);