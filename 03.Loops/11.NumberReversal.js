function numberReverse(n) {
    let numberString = n.toString();
    let result = '';

    for (let i = numberString.length - 1; i >= 0; i--) {
        result += numberString[i];
    }

    console.log(result);
}

numberReverse(123);
numberReverse(9876);
numberReverse(505);
numberReverse(10203);
numberReverse(7);
