function compareArrays(arr1, arr2) {
    let sum = 0;
    let areIdentical = true;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sum += Number(arr1[i]);
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areIdentical = false;
            break;
        }
    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

compareArrays(['10', '20', '30'], ['10', '20', '30']);
compareArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
compareArrays(['1'], ['10']);
