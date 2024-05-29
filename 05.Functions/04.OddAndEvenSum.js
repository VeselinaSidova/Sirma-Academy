function calculateSum(number) {
    let sumEven = 0;
    let sumOdd = 0;

    while (number > 0) {
        let lastDigit = number % 10;

        if (lastDigit % 2 === 0) {
            sumEven += lastDigit
        } else {
            sumOdd += lastDigit;
        }

        number = Math.trunc(number / 10);
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

calculateSum(1000435);
calculateSum(3495892137259234);