function encoding(number) {
    let numberString = number.toString();
    let symbolToPrint = '';
    let stringToPrint = '';

    for (let i = numberString.length - 1; i >= 0; i--) {
        if (Number(numberString[i]) === 0) {
            stringToPrint += 'ZERO';
        }
        for (let j = 0; j < numberString[i]; j++) {
            symbolToPrint = Number(numberString[i]) + 33;
            stringToPrint += String.fromCharCode(symbolToPrint);
        }
        if (i !== 0) {
            stringToPrint += '\n';
        }
    }

    console.log(stringToPrint);
}

encoding(2049);
encoding(9347439);