function print(n) {
    let pattern = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            pattern += i;
        }
        pattern += '\n';
    }

    console.log(pattern.trim());
}

print(5);