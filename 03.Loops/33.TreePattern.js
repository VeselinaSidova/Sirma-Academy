function printTree(n) {
    let tree = '';

    for (let i = 1; i <= n; i++) {
        for (let j = i; j < n; j++) {
            tree += ' ';
        }

        for (let j = 1; j <= (i * 2) - 1; j++) {
            tree += '*';
        }
        tree += '\n';
    }

    // print root
    for (let i = 1; i < n; i++) {
        tree += ' ';
    }
    tree += '*';

    console.log(tree);
}

printTree(6);
printTree(4);
printTree(3);

