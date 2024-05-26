function printStaircase(n) {
    let staircase = '';

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= (i * (i - 1)) / 2; j++) {
            staircase += ' ';
        }

        for (let j = 0; j <= i; j++) {
            staircase += '#';

        }
        staircase += '\n';
    }

    console.log(staircase);
}

printStaircase(5);
printStaircase(4);
printStaircase(2);