function prependArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result.push(arr[i]);
        } else {
            result.unshift(arr[i]);
        }
    }

    for (const number of result) {
        console.log(number);
    }
}

prependArray([7, -2, 8, 9]);
prependArray([3, -2, 0, -1]); 