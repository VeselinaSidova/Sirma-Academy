function printNthElement(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}

printNthElement(['5', '15', '31', '14', '20'], 2);
printNthElement(['dsa', 'asd', 'demo', 'test'], 2);
printNthElement(['1', '2', '3', '4', '5'], 6);
