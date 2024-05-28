function condenseArray(arr) {
    while (arr.length > 1) {
        let condensed = [arr.lenght - 1];
        for (let i = 0; i < arr.length - 1; i++) {
            condensed[i] = arr[i] + arr[i + 1];
        }
        arr = condensed;
    }

    console.log(arr[0]);
}

condenseArray([2, 10, 3]);
condenseArray([5, 0, 4, 1, 2]);
condenseArray([1]);