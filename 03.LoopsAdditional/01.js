function print(n) {
    let pattern = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            pattern += 1;
        }
        pattern += '\n';

    }
    console.log(pattern.trim());
}

print(5);