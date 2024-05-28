function extractSubsequence(arr) {
    let result = [];
    let current = arr[0];
    result.push(current);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > current) {
            current = arr[i];
            result.push(current);
        }
    }

    console.log(result.join(' '));
}

extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractSubsequence([1, 2, 3, 4]);
extractSubsequence([20, 3, 2, 15, 6, 1]);
