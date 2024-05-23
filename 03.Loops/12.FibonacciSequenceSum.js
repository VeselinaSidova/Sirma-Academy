function fibonacciSum(n) {
    let sum = 0;
    let previousNumber = 0;
    let currentNumber = 1;
    let next = 0;

    for (let i = 0; i <= n; i++) {
        sum += previousNumber;
        next = currentNumber + previousNumber;
        previousNumber = currentNumber;
        currentNumber = next;
    }

    console.log(sum);
}

fibonacciSum(3);
fibonacciSum(5);
fibonacciSum(1);
fibonacciSum(0);
fibonacciSum(10);
