function addRemoveElements(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(i + 1);
        } else if (arr[i] === 'remove') {
            result.pop();
        }
    }

    console.log(result.length > 0 ? result.join(' ') : 'Empty');
}

addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);
