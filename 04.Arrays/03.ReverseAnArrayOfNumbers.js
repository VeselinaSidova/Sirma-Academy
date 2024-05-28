function reverseArray(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr[i] = arr[n - i - 1];
    }

    console.log(newArr.join(' '));
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);