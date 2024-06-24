function checkIfMatrixIsMagix(input) {
    let matrix = [];

    for (const row of input) {
        matrix.push(row.split(' ').map(x => Number(x)));
    }

    let rowSum = matrix[0].reduce((a, b) => a + b);

    for (let row = 1; row < matrix.length; row++) {
        let currentSum = matrix[row].reduce((a, b) => a + b);
        if (currentSum !== rowSum) {
            console.log('False');
            return;
        }
    }

    let primaryDiagonalSum = 0;
    let secondaryDiagnalSum = 0;

    for (let col = 0; col < matrix[0].length; col++) {
        let columnSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            columnSum += matrix[row][col];
            if (row === col) {
                primaryDiagonalSum += matrix[row][col];
            }
            if (matrix.length - 1 - row === col) {
                secondaryDiagnalSum += matrix[row][col];
            }
        }
        if (columnSum !== rowSum) {
            console.log('False');
            return;
        }
    }

    if (rowSum !== primaryDiagonalSum || rowSum !== secondaryDiagnalSum) {
        console.log('False');
    } else {
        console.log('True');
    }
}

checkIfMatrixIsMagix([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);
checkIfMatrixIsMagix([
    "1 0 0 0",
    "0 0 0 1",
    "0 1 0 0",
    "0 0 1 0"
]);
checkIfMatrixIsMagix([
    "8 1 6",
    "3 5 7",
    "4 9 2"
]);