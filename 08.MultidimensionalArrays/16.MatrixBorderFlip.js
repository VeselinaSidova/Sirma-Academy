function borderFlipMatrix(input) {
    let matrix = [];
    let flippedMatrix = [];

    for (const row of input) {
        matrix.push(row.split(' '));
    }

    for (let i = 0; i < matrix[0].length; i++) {
        flippedMatrix[i] = [];
    }

    let borderElements = [];

    for (let col = 0; col < matrix[0].length; col++) {
        borderElements.push(matrix[0][col]);
    }

    for (let row = 1; row < matrix.length; row++) {
        borderElements.push(matrix[row][matrix[0].length - 1]);
    }

    for (let col = matrix[0].length - 2; col >= 0; col--) {
        borderElements.push(matrix[matrix.length - 1][col]);
    }

    for (let row = matrix.length - 2; row > 0; row--) {
        borderElements.push(matrix[row][0]);
    }

    borderElements.unshift(borderElements.pop());

    for (let i = 0; i < matrix[0].length; i++) {
        matrix[0][i] = borderElements.shift();
    }

    for (let row = 1; row < matrix.length; row++) {
        matrix[row][matrix[0].length - 1] = borderElements.shift();
    }

    for (let col = matrix[0].length - 2; col >= 0; col--) {
        matrix[matrix.length - 1][col] = borderElements.shift();
    }

    for (let row = matrix.length - 2; row > 0; row--) {
        matrix[row][0] = borderElements.shift();
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}

borderFlipMatrix([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);

borderFlipMatrix([
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 1 0 0"
]);

