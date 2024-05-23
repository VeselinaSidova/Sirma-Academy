function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    console.log(result);
}

factorial(5);
factorial(3);
factorial(0);
factorial(1);
factorial(10);
