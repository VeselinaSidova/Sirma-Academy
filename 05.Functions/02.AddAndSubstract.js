function calculate(first, second, third) {
    let result = substract(add(first, second), third);
    console.log(result);
}

function add(first, second) {
    return first + second;
}

function substract(first, second) {
    return first - second;
}

calculate(23, 6, 10);
calculate(1, 17, 30);
calculate(42, 58, 100);