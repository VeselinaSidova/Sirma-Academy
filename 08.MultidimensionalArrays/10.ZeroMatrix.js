function zeroMatrix(input) {
    let matrix = [];
    let zeroPosition = [];

    for (const row of input) {
        matrix.push(row.split(' ').map(x => Number(x)));
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                zeroPosition.push([row, col]);
            }
        }
    }

    for (const row of zeroPosition) {
        matrix = generateZeroMatrix(...row, matrix);
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}

function generateZeroMatrix(row, col, matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === row || j === col) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

zeroMatrix([
    "1 2 3",
    "4 0 6",
    "7 8 9"
]);
zeroMatrix([
    "1 2 3 0",
    "4 5 6 7",
    "0 8 9 1"
]);