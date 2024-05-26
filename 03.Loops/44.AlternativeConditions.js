function pyramidOfNumbersAlternative(n) {
    let printString = '';
    let numberToPrint = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = i; j < n / 2 - 1; j++) {
            printString += ' ';
        }

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

pyramidOfNumbersAlternative(7);
pyramidOfNumbersAlternative(10);
pyramidOfNumbersAlternative(12);