function sumMatrixElements(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    let sumElements = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            sumElements += matrix[row][col];
        }
    }

    console.log(rows);
    console.log(columns);
    console.log(sumElements);
}

sumMatrixElements([
    [7, 1, 3, 3, 2, 1],
    [1, 3, 9, 8, 5, 6],
    [4, 6, 7, 9, 1, 0]
]);
sumMatrixElements([
    [10, 11, 12, 13],
    [14, 15, 16, 17]
]);