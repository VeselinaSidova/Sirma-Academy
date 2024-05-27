function print(n) {
    let pattern = '';

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            pattern += j;
        }
        pattern += '\n';
    }

    console.log(pattern.trim());
}

print(5);