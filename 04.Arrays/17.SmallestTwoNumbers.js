function smallestTwoNumbers(arr) {
    //arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let current = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = current;
            }
        }
    }

    console.log(arr[0] + ' ' + arr[1]);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);