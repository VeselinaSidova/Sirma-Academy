function sumFirstAndLastElement(arr) {
    let sum = Number(arr[0]) + Number(arr[arr.length - 1]);
    console.log(sum);
}

sumFirstAndLastElement(['20', '30', '40']);
sumFirstAndLastElement(['10', '17', '22', '33']);
sumFirstAndLastElement(['11', '58', '69']);
