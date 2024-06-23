function compareMatrices(matrix1, matrix2) {
    let areEqual = true;

    for (let row = 0; row < matrix1.length; row++) {
        for (let col = 0; col < matrix1[row].length; col++) {
            if (matrix1[row][col] !== matrix2[row][col]) {
                areEqual = false;
            }
        }
    }

    console.log(areEqual ? 'equal' : 'not equal');
}

compareMatrices(
    [[1, 2, 3],
    [2, 1, 3]],
    [[1, 2, 3],
    [2, 1, 3]]
);
compareMatrices(
    [[1, 2, 3],
    [4, 5, 6]],
    [[1, 3],
    [4, 5]]
);


