function cavalryActions(cavalry, actionsArr) {
    for (let i = 0; i < actionsArr.length; i++) {
        let commandArr = actionsArr[i].split(' ');
        let command = commandArr[0];

        if (command === 'destroy') {
            let index = Number(commandArr[1]);

            if (index >= 0 && index < cavalry.length) {
                cavalry.splice(index, 1);
                console.log(cavalry.join(' '));
            }
        } else if (command === 'swap') {
            let index1 = Number(commandArr[1]);
            let index2 = Number(commandArr[2]);

            if (index1 >= 0
                && index1 < cavalry.length
                && index2 >= 0
                && index2 < cavalry.length
                && index1 !== index2) {
                let temp = cavalry[index1];
                cavalry[index1] = cavalry[index2];
                cavalry[index2] = temp;
                console.log(cavalry.join(' '));
            }
        } else if (command === 'add') {
            let id = Number(commandArr[1]);
            cavalry.push(id);
            console.log(cavalry.join(' '));
        } else if (command === 'insert') {
            let id = Number(commandArr[1]);
            let index = Number(commandArr[2]);

            if (index >= 0 && index <= cavalry.length) {
                cavalry.splice(index, 0, id);
                console.log(cavalry.join(' '));
            }
        } else if (command === 'center') {
            if (cavalry.length % 2 !== 0) {
                console.log(cavalry[Math.floor(cavalry.length / 2)]);
            } else {
                console.log(cavalry[(cavalry.length / 2) - 1] + ' ' + cavalry[cavalry.length / 2]);
            }
        }
    }
}


cavalryActions([1, 2, 3, 4, 5],
    ["destroy 3",
        "swap 0 1",
        "add 6",
        "center"]);

// cavalryActions([1, 2, 3, 4, 5],
//     ["add 6",
//         "swap 0 5",
//         "swap 1 4",
//         "swap 2 3",
//         "swap 2 100",
//         "swap 2 2",
//         "center"]);

// cavalryActions([1, 2],
//     ["insert 3 2",
//         "center",
//         "destroy 1",
//         "destroy 2",
//         "center"]);