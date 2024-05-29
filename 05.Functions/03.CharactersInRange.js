function printASCII(first, second) {
    let start = findSmallerSymbol(first, second);
    let end = findLargerSymbol(first, second);

    let result = '';

    for (let index = start + 1; index < end; index++) {
        result += String.fromCharCode(index) + ' ';
    }

    console.log(result);
}

function findSmallerSymbol(first, second) {
    return Math.min(first.charCodeAt(0), second.charCodeAt(0));
}

function findLargerSymbol(first, second) {
    return Math.max(first.charCodeAt(0), second.charCodeAt(0));
}

printASCII('a', 'd');
printASCII('#', ':');
printASCII('C', '#');
