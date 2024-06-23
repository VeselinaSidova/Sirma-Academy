function matrixDiagonalSum(input) {
    let matrix = [];
    let diagonalSum = 0;

    for (const row of input) {
        matrix.push(row.split(' ').map(x => Number(x)));
    }

    for (let i = 0; i < matrix.length; i++) {
        diagonalSum += matrix[i][i];
        diagonalSum += matrix[matrix.length - 1 - i][i];
    }

    console.log(diagonalSum);
}

matrixDiagonalSum([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);

matrixDiagonalSum([
    "10 11",
    "14 15"
]);

