function processOddNumbers(arr) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            result.push(arr[i] * 2);
        }
    }

    console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);