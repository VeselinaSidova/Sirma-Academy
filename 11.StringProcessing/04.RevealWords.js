function revealWords(words, input) {
    let result = input;
    let wordsArr = words.split(', ');

    for (const word of wordsArr) {
        result = result.replace('*'.repeat(word.length), word);
    }

    console.log(result);
}

revealWords('great',
    'JavaScript* is ***** programming language');
revealWords('the, best, learn',
    'JavaScript is *** **** language to *****');

