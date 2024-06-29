function maximalSum(input) {
    let matrix = [];
    for (const row of input) {
        matrix.push(row.split(' ').map(x => Number(x)));
    }

    let row = 0;
    let currentSubmatrix = [];
    let currentSubmatrixSum = 0;
    let largestSubmatrixSum = 0;
    let largestSubmatrix = [];

    while (row <= matrix.length - 3) {
        for (let col = 0; col <= matrix[row].length - 3; col++) {
            currentSubmatrix = [];
            currentSubmatrixSum = 0;

            for (let i = row; i < row + 3; i++) {
                currentSubmatrix[i - row] = [];
                for (let j = col; j < col + 3; j++) {
                    currentSubmatrix[i - row].push(matrix[i][j]);
                    currentSubmatrixSum += matrix[i][j];
                }
            }

            if (largestSubmatrixSum < currentSubmatrixSum) {
                largestSubmatrixSum = currentSubmatrixSum;
                largestSubMatrix = currentSubmatrix.map(row => row.slice());
            }
        }
        row++;
    }

    console.log(`Sum = ${largestSubmatrixSum}`);
    for (const row of largestSubMatrix) {
        console.log(row.join(' '));
    }
}

maximalSum([
    "1 5 5 2 4",
    "2 1 4 14 3",
    "3 7 11 2 8",
    "4 8 12 16 4"
]);
maximalSum([
    "1 0 4 3 1 1",
    "1 3 1 3 0 4",
    "6 4 1 2 5 6",
    "2 2 1 5 4 1",
    "3 3 3 6 0 5"
]);
