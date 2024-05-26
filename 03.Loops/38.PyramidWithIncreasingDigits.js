function printNumberPyramid(n) {
    let pyramid = '';
    let index = 1;

    for (let i = 1; i <= n; i++) {
        index = i;

        for (let j = i; j < n; j++) {
            pyramid += ' ';
        }

        for (let j = 1; j <= (i * 2) - 1; j++) {
            pyramid += index;
            if (j <= ((i * 2) - 1) / 2) {
                index++;
            } else {
                index--;
            }
        }

        if (i < n) {
            pyramid += '\n';
        }
    }

    console.log(pyramid);
}

printNumberPyramid(5);
printNumberPyramid(4);
printNumberPyramid(3);