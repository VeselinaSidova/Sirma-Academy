function fillMatrix(size, pattern) {
    let matrix;
    if (pattern === 'A') {
        matrix = aPattern(size);
    } else if (pattern === 'B') {
        matrix = bpattern(size);
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}

function aPattern(size) {
    let matrix = [];
    let element = 1;

    for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
            if (!matrix[row]) {
                matrix[row] = [];
            }
            matrix[row][col] = element;
            element++;
        }
    }
    return matrix;
}

function bpattern(size) {
    let matrix = [];
    let element = 1;

    for (let col = 0; col < size; col++) {
        for (let i = 0; i < size; i++) {
            if (!matrix[i]) {
                matrix[i] = [];
            }

            let row = i;
            if (col % 2 !== 0) {
                row = size - 1 - i;
            }
            matrix[row][col] = element;
            element++;
        }
    }
    return matrix;
}

fillMatrix(3, 'A');
fillMatrix(3, 'B');