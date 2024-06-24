function chessBoardChecker(input) {
    let matrix = [];
    for (const row of input) {
        matrix.push(row.split(' '));
    }

    let isThreatened = false;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === '1') {
                isThreatened = checkIfQueenIsThreatened(row, col, matrix);
                if (isThreatened) {
                    break;
                }
            }
        }
        if (isThreatened) {
            break;
        }
    }

    console.log(isThreatened ? 'Yes' : 'No');
}

function checkIfQueenIsThreatened(r, c, matrix) {
    for (let row = r; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === r && col === c) {
                continue;
            }

            if (matrix[row][col] === '1') {
                let isOnPrimaryDiagonal = (row - r) === (col - c);
                let isOnSecondaryDiagonal = (row - r) === (c - col);
                if (row === r || col === c || isOnPrimaryDiagonal || isOnSecondaryDiagonal) {
                    return true;
                }
            }
        }
    }
    return false;
}

chessBoardChecker([
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 0 1 0"
]);
chessBoardChecker([
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 1 0 0"
]);
chessBoardChecker([
    "0 1 0 0",
    "0 0 0 0",
    "1 0 0 0",
    "0 0 0 0"
]);
