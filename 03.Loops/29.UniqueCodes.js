function generateCode(firstLimit, secondLimit, thirdLimit) {

    for (let i = 1; i <= firstLimit; i++) {
        let isFirstEven = false;

        if (i % 2 === 0) {
            isFirstEven = true;
        }

        if (isFirstEven) {
            for (let j = 2; j <= secondLimit; j++) {
                let isPrime = true;
                for (let l = 2; l <= Math.sqrt(j); l++) {
                    if (j % l === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    for (let k = 1; k <= thirdLimit; k++) {
                        if (k % 2 === 0) {
                            console.log(`${i} ${j} ${k}`);
                        }
                    }
                }
            }
        }
    }
}

generateCode(3, 5, 5);
generateCode(6, 2, 6);