function passwordValidator(password) {
    let isValidLength = checkPasswordLength(password);
    let isNumbersAndDigits = checkIfOnlyLettersAndDigits(password);
    let containsTwoDigits = checkIfPasswordHasTwoDigits(password);

    if (!isValidLength) {
        console.log('Password must be between 6 and 10 characters');
    } if (!isNumbersAndDigits) {
        console.log('Password must consist only of letters and digits');
    } if (!containsTwoDigits) {
        console.log('Password must have at least 2 digits');
    } if (isValidLength && isNumbersAndDigits && containsTwoDigits) {
        console.log('Password is valid');
    }
}

function checkPasswordLength(password) {
    let isValidLength = false;
    if (password.length >= 6 && password.length <= 10) {
        isValidLength = true;
    }
    return isValidLength;
}

function checkIfOnlyLettersAndDigits(password) {
    let isValid = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57 ||
            password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90 ||
            password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122) {
            isValid = true;
        } else {
            isValid = false;
            break;
        }
    }

    return isValid;
}

function checkIfPasswordHasTwoDigits(password) {
    let counter = 0;

    for (let i = 0; i < password.length; i++) {
        if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {
            counter++;
        }
    }

    let isValid = false;

    if (counter >= 2) {
        isValid = true;
    }

    return isValid;
}

passwordValidator('pass');
passwordValidator('APass123');
passwordValidator('Pa$s$s');
