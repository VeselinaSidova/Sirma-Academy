function solve(input) {
    let matrix = [];
    let rowSums = [];
    let colSums = [];
    let colSum = 0;

    for (const row of input) {
        matrix.push(row.split(' ').map(x => Number(x)));
    }

    // Sum rows
    for (let row = 0; row < matrix.length; row++) {
        rowSums.push(matrix[row].reduce((a, b) => a + b));
    }

    // Sum columns
    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        colSums.push(colSum);
        colSum = 0;
    }

    console.log(`Row Sums: ${rowSums.join(', ')}`);
    console.log(`Col Sums: ${colSums.join(', ')}`);
}

solve([
    "1 2",
    "3 4",
    "5 6",
]);

solve([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);