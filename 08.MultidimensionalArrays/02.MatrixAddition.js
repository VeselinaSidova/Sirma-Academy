function sumMatrices(matrix1, matrix2) {
    let resultMatrix = [];

    for (let row = 0; row < matrix1.length; row++) {
        resultMatrix[row] = [];
        for (let col = 0; col < matrix1[row].length; col++) {
            resultMatrix[row][col] = matrix1[row][col] + matrix2[row][col];
        }
    }

    for (const row of resultMatrix) {
        console.log(row.join(' '));
    }
}

sumMatrices([[1, 2], [3, 4]],
    [[2, 2], [2, 2]]);
sumMatrices([[1, 2, 3], [4, 3, 1]],
    [[1, 2, 3], [4, 2, 2]]);

