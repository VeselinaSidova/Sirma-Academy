function printElementsFromArray(k, arr) {
    let firstKElements = [];
    let lastKElements = [];

    for (let i = 0; i < k; i++) {
        firstKElements.push(arr[i]);
    }

    for (let i = arr.length - k; i < arr.length; i++) {
        lastKElements.push(arr[i]);
    }

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}

printElementsFromArray(2, [7, 8, 9]);
printElementsFromArray(3, [6, 7, 8, 9]);