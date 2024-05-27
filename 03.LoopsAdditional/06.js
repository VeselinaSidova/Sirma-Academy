function print(n) {
    let pattern = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i % 2 === 0) {
                pattern += (j % 2 === 0) ? '1' : '0';
            } else {
                pattern += (j % 2 === 0) ? '0' : '1';
            }
        }
        pattern += '\n';
    }

    console.log(pattern.trim());
}

print(5);