function calculate(num1, num2, operation) {
    let result = 0;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        result = num1 / num2;
    }

    console.log(result.toFixed(2));
}

calculate(5, 5, 'add');
calculate(10, 12, 'subtract');
calculate(9, 3, 'divide');
calculate(5, 2, 'divide');
calculate(3.1, 0.1, 'multiply');
