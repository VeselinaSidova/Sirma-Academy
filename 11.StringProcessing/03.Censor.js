function censorString(input, word) {
    let censor = '*'.repeat(word.length)
    let result = input.replaceAll(word, censor);
    console.log(result);
}

censorString('A small sentence with some words', 'small');
censorString('Find the hidden word', 'hidden');
censorString('A small sentence with small words', 'small');
