function matrixIntersection(input1, input2) {
    let matrix1 = [];
    let matrix2 = [];
    let resultMatrix = [];

    for (let i = 0; i < input1.length; i++) {
        matrix1[i] = input1[i].split(' ');
        matrix2[i] = input2[i].split(' ');
    }

    for (let row = 0; row < matrix1.length; row++) {
        resultMatrix[row] = [];
        for (let col = 0; col < matrix1[row].length; col++) {
            if (matrix1[row][col] === matrix2[row][col]) {
                resultMatrix[row][col] = matrix1[row][col];
            } else {
                resultMatrix[row][col] = '*';
            }
        }
    }

    for (const row of resultMatrix) {
        console.log(row.join(' '));
    }
}

matrixIntersection(
    ["a b c d",
        "a b c d",
        "a b c d"],
    ["k b c k",
        "a b g d",
        "a k c d"]
);

matrixIntersection(
    ["1 2",
        "3 4",
        "5 6",
        "7 8",
        "9 1"],
    ["0 2",
        "3 1",
        "1 6",
        "7 4",
        "1 1"]
);