function printLeftArrow(n) {
    let arrow = '';

    //print top

    for (let i = 1; i <= n - 1; i++) {
        for (let j = i; j < n - 1; j++) {
            arrow += ' ';
        }

        for (let j = 0; j < i; j++) {
            arrow += '*';

        }
        arrow += '\n';
    }

    // print bottom

    for (let i = n - 2; i > 0; i--) {
        for (let j = n - 1; j > i; j--) {
            arrow += ' ';

        }
        for (let j = i - 1; j >= 0; j--) {
            arrow += '*';

        }
        if (i > 1) {
            arrow += '\n';
        }
    }

    console.log(arrow);
}

printLeftArrow(5);
printLeftArrow(4);
printLeftArrow(10);