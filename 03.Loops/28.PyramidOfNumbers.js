function printPyramid(n) {
    let printString = '';
    let numberToPrint = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (numberToPrint > n) {
                break;
            }
            printString += numberToPrint + ' ';
            numberToPrint++;
        }
        if (numberToPrint <= n) {
            printString += '\n';
        }
    }
    console.log(printString);
}

printPyramid(7);
printPyramid(10);
printPyramid(15);