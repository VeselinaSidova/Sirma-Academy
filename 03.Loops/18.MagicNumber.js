function findMagicNumber(first, second, magic) {
    let isMagic = false;
    let firstValue = 0;
    let secondValue = 0;
    let combinationsTried = 0;

    for (let i = first; i <= second; i++) {
        if (isMagic === true) {
            break;
        }
        for (let j = first; j <= second; j++) {
            if (i + j === magic) {
                combinationsTried++;
                isMagic = true;
                firstValue = i;
                secondValue = j;
                break;
            }
            combinationsTried++;
        }
    }

    if (isMagic) {
        console.log(`Combination ${combinationsTried} - (${firstValue} + ${secondValue} = ${magic})`);
    } else {
        console.log(`${combinationsTried} combinations - neither equals ${magic}`);
    }
}

findMagicNumber(1, 10, 5);
findMagicNumber(23, 24, 20);
findMagicNumber(1, 2, 3);
