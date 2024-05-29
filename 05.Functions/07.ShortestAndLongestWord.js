function findShortestAndLongestWord(input) {
    let wordArr = input.split(' ');
    let shortest = wordArr[0];
    let longest = '';

    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] == '') {
            continue;
        } if (wordArr[i].includes('?', '.', '_', '-', '!', ',', ';', ':', '(', ')')) {
            wordArr[i] = removePunctuation(wordArr[i]);
        } if (wordArr[i].length > longest.length) {
            longest = wordArr[i];
        } if (wordArr[i].length < shortest.length) {
            shortest = wordArr[i];
        }
    }
    console.log(`Longest -> ${longest}`);
    console.log(`Shortest -> ${shortest}`);
}

function removePunctuation(word) {
    let cleanWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90 ||
            word[i].charCodeAt(0) >= 97 && word[i].charCodeAt(0) <= 122
        ) {
            cleanWord += word[i];
        }
    }
    return cleanWord;
}

findShortestAndLongestWord('Hello how are you today? I hope you are fine ');
findShortestAndLongestWord('Lorem Ipsum is dummy text of the typesetting industry.');
