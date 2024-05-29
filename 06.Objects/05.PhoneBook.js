function phoneBook(input) {
    let phoneBook = {};

    for (let i = 0; i < input.length; i++) {
        let parts = input[i].split(' ');
        let name = parts[0];
        let phoneNumber = parts.slice(1).join(' ');

        phoneBook[name] = phoneNumber;
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`)
    }
}

phoneBook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);
phoneBook(["Maria 123", "Samantha 456", "Nicole 789"]);
