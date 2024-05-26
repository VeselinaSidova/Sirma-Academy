function generatePasswords(n, l) {
    for (let d1 = 1; d1 <= n; d1++) {
        for (let d2 = 1; d2 <= n; d2++) {
            for (let c1 = 0; c1 < l; c1++) {
                for (let c2 = 0; c2 < l; c2++) {
                    for (let d3 = 1; d3 <= n; d3++) {
                        if (d3 > d1 && d3 > d2) {
                            let password = `${d1}${d2}${String.fromCharCode(97 + c1)}${String.fromCharCode(97 + c2)}${d3}`;
                            console.log(password);
                        }
                    }
                }

            }

        }

    }
}

generatePasswords(2, 4);
generatePasswords(3, 1);
