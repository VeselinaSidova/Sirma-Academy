function rotateArray(arr, n) {
    for (let i = 0; i < n; i++) {
        let currentElement = arr.pop();
        arr.unshift(currentElement);
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
