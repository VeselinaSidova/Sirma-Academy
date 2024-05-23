function sumVowels(word) {
    const aPoints = 1;
    const ePoints = 2;
    const iPoints = 3;
    const oPoints = 4;
    const uPoints = 5;

    let sum = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a') {
            sum += aPoints;
        } else if (word[i] === 'e') {
            sum += ePoints;
        } else if (word[i] === 'i') {
            sum += iPoints;
        } else if (word[i] === 'o') {
            sum += oPoints;
        } else if (word[i] === 'u') {
            sum += uPoints;
        }
    }

    console.log(sum);
}

sumVowels("hello");
sumVowels("hi");
sumVowels("bye");
sumVowels("zzzz");
