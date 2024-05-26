function findEqualSumOfOddAndEqualPositions(num1, num2) {
    let numberFound = false;

    for (let i = num1; i <= num2; i++) {
        let sumOdd = 0;
        let sumEven = 0;
        let numberToString = i.toString();
        for (let j = 0; j < numberToString.length; j++) {
            if (j % 2 === 0) {
                sumEven += Number(numberToString[j]);
            } else {
                sumOdd += Number(numberToString[j]);
            }
        }

        if (sumEven === sumOdd) {
            console.log(i);
            numberFound = true;
        }
    }

    if (!numberFound) {
        console.log('None');
    }
}

findEqualSumOfOddAndEqualPositions(100000, 100050);
findEqualSumOfOddAndEqualPositions(299900, 300000);
findEqualSumOfOddAndEqualPositions(100115, 100120);


