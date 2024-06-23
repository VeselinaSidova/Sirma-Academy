function calculateBoundarySum(input) {
    let matrix = [];
    let boundarySum = 0;

    for (const row of input) {
        matrix.push(row.split(' ').map(x => Number(x)));
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === 0 || row === matrix.length - 1 || row !== 0 && (col === 0 || col === matrix[row].length - 1)) {
                boundarySum += matrix[row][col];
            }
        }
    }

    console.log(boundarySum);
}

calculateBoundarySum([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);

calculateBoundarySum([
    "1 2 3 0",
    "4 5 6 7",
    "0 8 9 1"
]);