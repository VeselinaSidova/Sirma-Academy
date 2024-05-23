function coinsAndNotes(oneLev, twoLev, fiveLev, sum) {

    for (let i = 0; i <= oneLev; i++) {
        for (let j = 0; j <= twoLev; j++) {
            for (let k = 0; k <= fiveLev; k++) {
                let totalSum = i * 1 + j * 2 + k * 5;
                if (totalSum === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }

}

coinsAndNotes(3, 2, 3, 10);
coinsAndNotes(5, 3, 1, 7);
