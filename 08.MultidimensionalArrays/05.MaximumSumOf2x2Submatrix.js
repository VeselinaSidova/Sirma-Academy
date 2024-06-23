function sumOf2x2Submatrix(input) {
    let matrix = [];
    let maxSum = 0;
    let resultMatrix = [
        [0, 0],
        [0, 0],
    ];

    for (let i = 0; i < input.length; i++) {
        matrix[i] = input[i].split(' ').map(el => Number(el));
    }

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            let firstNum = matrix[row][col];
            let secondNum = matrix[row][col + 1];
            let thirdNum = matrix[row + 1][col];
            let forthNum = matrix[row + 1][col + 1];
            let currentSum = firstNum + secondNum + thirdNum + forthNum;

            if (currentSum > maxSum) {
                maxSum = currentSum;
                resultMatrix[0][0] = firstNum;
                resultMatrix[0][1] = secondNum;
                resultMatrix[1][0] = thirdNum;
                resultMatrix[1][1] = forthNum;
            }
        }
    }

    console.log(maxSum);
    for (const row of resultMatrix) {
        console.log(row.join(' '));
    }
}

sumOf2x2Submatrix([
    "7 1 3 3 2 1",
    "1 3 9 8 5 6",
    "4 6 7 9 1 0"
]);
sumOf2x2Submatrix([
    "10 11 12 13",
    "14 15 16 17"
]);