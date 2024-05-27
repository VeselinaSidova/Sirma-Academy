function print(n) {
    let pattern = '';
    let number = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 6; j++) {
            pattern += number;
            if (j % 2 === 0) {
                number--;
            } else {
                number++;
            }
        }
        pattern += '\n';
    }

    console.log(pattern.trim());
}

print(5);
