function print(n) {
    let pattern = '';
    let number = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            pattern += number;
        }
        pattern += '\n';
        if (i % 2 === 0) {
            number++;
        } else {
            number--;
        }

    }

    console.log(pattern.trim());
}

print(5);