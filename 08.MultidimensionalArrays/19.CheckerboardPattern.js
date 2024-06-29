function checkerboardPattern(n) {
    let matrix = [];

    for (let row = 0; row < n; row++) {
        matrix[row] = [];
        for (let col = 0; col < n; col++) {
            if (row % 2 === 0 && col % 2 === 0) {
                matrix[row].push(0);
            } else if (row % 2 === 0 && col % 2 !== 0) {
                matrix[row].push(1);
            } else if (row % 2 !== 0 && col % 2 === 0) {
                matrix[row].push(1);
            } else {
                matrix[row].push(0);
            }
        }
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}

checkerboardPattern(3);
checkerboardPattern(4);