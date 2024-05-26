function pyramidOfNumbers(n) {
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

pyramidOfNumbers(7);
pyramidOfNumbers(10);
pyramidOfNumbers(15);