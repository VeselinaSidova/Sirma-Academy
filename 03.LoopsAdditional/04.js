function print(n) {
    let pattern = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                pattern += 1;
            } else {
                pattern += 0;
            }

        }
        pattern += '\n';
    }
    console.log(pattern.trim());
}

print(5);