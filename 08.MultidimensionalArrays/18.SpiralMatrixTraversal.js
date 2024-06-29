function spiralMatrixTraversal(input) {
    let matrix = [];
    for (const row of input) {
        matrix.push(row.split(' '));
    }

    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = cols - 1;
    let top = 0;
    let bottom = rows - 1;
    let result = [];

    while (left <= right && top <= bottom) {
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;

        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left])
            }
            left++;
        }
    }

    console.log(result.join(' '));
}

spiralMatrixTraversal([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);
spiralMatrixTraversal([
    "1 2 3 4",
    "5 6 7 8",
    "9 10 11 12",
    "13 14 15 16"
]);
spiralMatrixTraversal([
    "1 2",
    "3 4"
]);
