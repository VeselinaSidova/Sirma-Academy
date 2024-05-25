function squareFrame(n) {
    let square = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                if (j === 0 || j === n - 1) {
                    square += '+ ';
                } else {
                    square += '- ';
                }
            } else {
                if (j === 0 || j === n - 1) {
                    square += '| ';
                } else {
                    square += '- ';
                }
            }
        }
        if (i < n - 1) {
            square += '\n';
        }
    }

    console.log(square);
}

squareFrame(3);
squareFrame(4);
squareFrame(5);
squareFrame(6);