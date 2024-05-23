function hollowRectangle(n, m) {
    let pattern = '';

    for (let row = 0; row < n; row++) {
        pattern += '\n';
        for (let col = 0; col < m; col++) {
            if (row === 0 || row === n - 1) {
                pattern += '*';
            } else if (col === 0 || col === m - 1 && row !== 0 && row !== n - 1) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
    }

    console.log(pattern);
}

hollowRectangle(4, 6);
hollowRectangle(2, 2);
hollowRectangle(3, 4);
