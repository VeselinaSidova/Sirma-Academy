function printList(arr) {
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        arr[i] = `${i + 1}.${arr[i]}`;
    }

    console.log(arr.join('\n'));
}

printList(["Potatoes", "Tomatoes", "Onions", "Apples"]);