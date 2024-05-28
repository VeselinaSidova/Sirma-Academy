function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;

        if (result.length >= k) {
            for (let j = 0; j < k; j++) {
                sum += result[result.length - 1 - j];
            }
        } else {
            for (let j = 0; j < result.length; j++) {
                sum += result[result.length - 1 - j];

            }
        }
        result.push(sum);
    }

    console.log(result.join(' '));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);