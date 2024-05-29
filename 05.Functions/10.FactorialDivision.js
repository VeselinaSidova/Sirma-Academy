function factorialDivision(num1, num2) {
    let firstFactorial = calculateFactorial(num1);
    let secondFactorial = calculateFactorial(num2);

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

function calculateFactorial(number) {
    if (number === 1) {
        return 1;
    }

    let factorial = number * calculateFactorial(number - 1);

    return factorial;
}

factorialDivision(5, 2);
factorialDivision(6, 2);
