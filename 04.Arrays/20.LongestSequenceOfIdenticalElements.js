function findLongestIdenticalSequence(arr) {
    let longestSequence = [];
    let currentSequence = [];
    currentSequence.push(arr[0]);

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentSequence.push(arr[i]);
        } else if (arr[i] !== arr[i - 1]) {
            currentSequence = [arr[i]];
        }

        if (longestSequence.length < currentSequence.length) {
            longestSequence = currentSequence;
        }
    }

    console.log(longestSequence);
}

findLongestIdenticalSequence([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
findLongestIdenticalSequence([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
findLongestIdenticalSequence([1, 1, 2, 3, 4, 5, 6, 2, 2]);
findLongestIdenticalSequence([4, 4, 4, 4]);
findLongestIdenticalSequence([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
