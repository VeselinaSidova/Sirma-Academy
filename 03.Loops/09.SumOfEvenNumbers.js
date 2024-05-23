function sumEvenNumbers(n) {
    let sum = 0;
    for (let i = 0; i <= n * 2; i += 2) {
        sum += i;
    }
    console.log(sum);
}

sumEvenNumbers(3);
sumEvenNumbers(5);
sumEvenNumbers(1);
sumEvenNumbers(0);
sumEvenNumbers(10);