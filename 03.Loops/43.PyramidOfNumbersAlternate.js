function pyramidOfNumbersAlternative(n) {
    let printString = '';
    let numberToPrint = 1;

    // calculate rows
    let rows = 0;
    let totalNumbers = 0;

    while (totalNumbers < n) {
        rows++;
        totalNumbers += rows;
    }

    let maxRowWidth = rows * 2 - 1;

    // print pyramid
    for (let i = 1; i <= rows; i++) {
        let rowContent = '';
        for (let j = 0; j < i; j++) {
            if (numberToPrint > n) {
                break;
            }
            rowContent += numberToPrint + ' ';
            numberToPrint++;
        }

        // calculate leading spaces
        let leadingSpaces = maxRowWidth - rowContent.trim().length;
        for (let s = 0; s < leadingSpaces; s++) {
            printString += ' ';
        }

        printString += rowContent.trim();

        if (i < rows) {
            printString += '\n';
        }

    }
    console.log(printString);
}

pyramidOfNumbersAlternative(7);
pyramidOfNumbersAlternative(10);
pyramidOfNumbersAlternative(12);


