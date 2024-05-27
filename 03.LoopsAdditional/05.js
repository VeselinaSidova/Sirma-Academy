function print(n) {
    let pattern = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === Math.floor(n / 2) && j === Math.floor(n / 2)) {
                pattern += 0;
            } else {
                pattern += 1;
            }
        }
        pattern += '\n';
    }
    console.log(pattern.trim());
}

print(5);