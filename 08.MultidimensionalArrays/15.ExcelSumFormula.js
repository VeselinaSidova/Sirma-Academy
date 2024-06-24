function calculateSum(matrix, range) {
    let rangeValues = range.split(':');
    const [startColumn, startRow] = parseCell(rangeValues[0]);
    const [endColumn, endRow] = parseCell(rangeValues[1]);
    let sum = 0;

    for (let row = startRow; row <= endRow; row++) {
        for (let col = startColumn; col <= endColumn; col++) {
            sum += matrix[row][col];
        }
    }
    console.log(sum);
}

function parseCell(cell) {
    let column = '';
    let row = '';

    for (const char of cell) {
        if (isNaN(char)) {
            column += char;
        } else {
            row += char;
        }
    }

    let columnNumber = 0;
    const aASCII = 65;

    for (let i = 0; i < column.length; i++) {
        columnNumber = columnNumber * 26 + (column.charCodeAt(i) - aASCII + 1);
    }

    return [columnNumber - 1, Number(row) - 1];
}

calculateSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
],
    "A1:C2");

calculateSum([
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
],
    "A1:B4");

calculateSum([
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0]],
    "A1:C4");