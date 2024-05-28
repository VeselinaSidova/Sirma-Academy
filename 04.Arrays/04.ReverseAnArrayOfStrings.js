function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let currentElement = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = currentElement;
    }

    console.log(arr.join(' '));
}

reverseArray(['a', 'b', 'c', 'd', 'e']);
reverseArray(['abc', 'def', 'hig', 'klm', 'nop']);
reverseArray(['33', '123', '0', 'dd']);
