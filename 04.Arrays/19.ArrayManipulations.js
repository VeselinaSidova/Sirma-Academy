function arrayManipulations(input) {
    let [numbers, ...commands] = input;
    numbers = input[0].split(' ').map(x => Number(x));

    for (let i = 0; i < commands.length; i++) {
        let [action, ...value] = commands[i].split(' ');
        if (action === 'Add') {
            numbers.push(Number(value));
        } else if (action === 'Remove') {
            numbers.splice(numbers.indexOf(Number(value)), 1);
        } else if (action === 'RemoveAt') {
            numbers.splice(Number(value), 1);
        } else if (action === 'Insert') {
            numbers.splice(Number(value[1]), 0, Number(value[0]));
        }
    }

    console.log(numbers.join(' '));
}


arrayManipulations(["4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"]);
