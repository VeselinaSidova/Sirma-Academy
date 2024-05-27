function print(n) {
    let pattern = '';

    for (let i = 1; i <= n; i++) {
        for (let j = i; j < n + i; j++) {
            pattern += j;
        }
        pattern += '\n';
    }

    console.log(pattern.trim());
}

print(5);
