function printArrow(n) {
    let arrow = '';

    for (let i = 0; i < n - 1; i++) {
        for (let j = i; j < n - 2; j++) {
            arrow += ' ';
        }

        for (let j = 0; j < i + 1; j++) {
            arrow += '* ';

        }
        arrow += '\n';
    }

    //print root

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < (n - 2) / 2; j++) {
            arrow += ' ';
        }

        if (n % 2 === 0) {
            for (let j = 0; j < n - 1; j++) {
                arrow += '*';
            }
        } else {
            for (let j = 0; j < n - 2; j++) {
                arrow += '*';
            }
        }
        if (i < n - 2) {
            arrow += '\n';
        }
    }

    console.log(arrow);
}

printArrow(7);
printArrow(4);
printArrow(6);