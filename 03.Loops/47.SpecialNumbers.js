function generateSpecialNumbers(n) {
    for (let d1 = 1; d1 <= 9; d1++) {
        for (let d2 = 1; d2 <= 9; d2++) {
            for (let d3 = 1; d3 <= 9; d3++) {
                for (let d4 = 1; d4 <= 9; d4++) {
                    let numString = `${d1}${d2}${d3}${d4}`;
                    let number = Number(numString);
                    if (n % d1 === 0
                        && n % d2 === 0
                        && n % d3 === 0
                        & n % d4 === 0
                    ) {
                        console.log(number);
                    }

                }

            }

        }

    }
}

generateSpecialNumbers(3);
