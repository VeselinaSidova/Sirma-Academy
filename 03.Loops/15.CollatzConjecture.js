function printCollatzSequence(n) {
    let collatzSequence = '';
    collatzSequence += n.toString() + ' ';

    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
            collatzSequence += n.toString() + ' ';
        } else if (n % 2 !== 0) {
            n = (n * 3) + 1;
            collatzSequence += n.toString() + ' ';
        }
    }

    console.log(collatzSequence);
}

printCollatzSequence(6);
printCollatzSequence(12);
printCollatzSequence(9);
printCollatzSequence(200);
printCollatzSequence(15);
