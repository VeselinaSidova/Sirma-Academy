function printDiagonals(input) {
    let matrix = [];
    let primaryDiagonal = [];
    let secondaryDiagonal = [];

    for (const row of input) {
        matrix.push(row.split(' '));
    }

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal.push(matrix[i][i]);
        secondaryDiagonal.push(matrix[matrix.length - 1 - i][i]);
    }

    console.log(primaryDiagonal.join(' '));
    console.log(secondaryDiagonal.join(' '));
}

printDiagonals([
    "1 2 3",
    "1 2 3",
    "1 2 3"
]);
printDiagonals([
    "1 2 3 2",
    "1 1 2 4",
    "1 2 1 4",
    "2 2 3 1"
]);

