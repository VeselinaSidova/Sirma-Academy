function primePairs(initialValue1, intialValue2, difference1, difference2) {
    let finalValue1 = initialValue1 + difference1;
    let finalValue2 = intialValue2 + difference2;


    for (let i = initialValue1; i <= finalValue1; i++) {
        let isFirstPrime = true;

        for (let k = 2; k <= Math.sqrt(i); k++) {
            if (i % k === 0) {
                isFirstPrime = false;
                break;
            }
        }

        if (isFirstPrime) {
            for (let j = intialValue2; j <= finalValue2; j++) {
                let isSecondPrime = true;
                for (let l = 2; l <= Math.sqrt(j); l++) {
                    if (j % l === 0) {
                        isSecondPrime = false;
                        break;
                    }
                }
                if (isSecondPrime) {
                    console.log(`${i}${j}`);
                }
            }
        }
    }
}

primePairs(10, 20, 5, 5);
primePairs(10, 30, 9, 6);