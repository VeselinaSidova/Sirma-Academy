function christmasTree(n) {
    let tree = '';

    //print top
    for (let i = 0; i < n; i++) {
        tree += ' ';
    }
    tree += ' |' + '\n';


    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            tree += ' ';
        }

        for (let j = 0; j <= i; j++) {
            tree += '*';
        }

        tree += ' | ';

        for (let j = 0; j <= i; j++) {
            tree += '*';
        }

        if (i < n - 1) {
            tree += '\n';
        }
    }

    console.log(tree);
}

christmasTree(1);
christmasTree(2);
christmasTree(3);
christmasTree(4);