function palindromeCheck(word) {
    let isPalindrome = false;

    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] === word[word.length - 1 - i]) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }
    }

    console.log(isPalindrome);
}

palindromeCheck("radar");
palindromeCheck("hello");
palindromeCheck("racecar");
palindromeCheck("java");
palindromeCheck("madam");
