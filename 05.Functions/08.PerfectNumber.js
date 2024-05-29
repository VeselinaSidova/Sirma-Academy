function isPerfectNumber(number) {
    let isPerfect = true;

    if (number <= 0) {
        isPerfect = false;
    }

    let dividors = [];
    let divisorsSum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            dividors.push(i);
            divisorsSum += i;
        }
    }

    if (divisorsSum === number && isPerfect) {
        console.log('Perfect number!');
        console.log(dividors.join(' + '));
    } else {
        console.log('It’s not so perfect.');
    }
}

isPerfectNumber(6);
isPerfectNumber(28);
isPerfectNumber(1236498);
