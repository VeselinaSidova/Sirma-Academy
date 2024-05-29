function findSmallestNumber(first, second, third) {
    let result = findSmaller(findSmaller(first, second), third);
    console.log(result);
}

function findSmaller(first, second) {
    return first < second ? first : second;
}

findSmallestNumber(2, 5, 3);
findSmallestNumber(600, 342, 123);
findSmallestNumber(25, 21, 4);  