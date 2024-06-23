function rotateMatrix(input) {
    let matrix = [];
    let rotatedMatrix = [];

    for (const row of input) {
        matrix.push(row.split(' '));
    }

    for (let i = 0; i < matrix[0].length; i++) {
        rotatedMatrix[i] = [];
    }

    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length; row++) {
            rotatedMatrix[col][matrix.length - 1 - row] = matrix[row][col];
        }
    }

    for (const row of rotatedMatrix) {
        console.log(row.join(' '));
    }

}

rotateMatrix([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);

rotateMatrix([
    "0 1 2 3",
    "4 5 6 7",
    "8 9 10 11",
    "12 13 14 15"
]);
