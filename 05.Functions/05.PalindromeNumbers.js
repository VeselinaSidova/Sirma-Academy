function findPalindromeNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(isPalindrome(arr[i]));
    }
}

function isPalindrome(number) {
    let numberString = number.toString();
    let isPalindrome = true;

    for (let i = 0; i < numberString.length / 2; i++) {
        if (numberString[i] !== numberString[numberString.length - 1 - i]) {
            isPalindrome = false;
        }
    }

    return isPalindrome;
}

findPalindromeNumbers([123, 323, 421, 121]);
findPalindromeNumbers([32, 2, 232, 1010]);