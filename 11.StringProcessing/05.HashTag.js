function printHashtags(input) {
    let pattern = /#([a-z]+)/g;

    let matches = input.matchAll(pattern);

    for (const match of matches) {
        console.log(match[1]);
    }
}

printHashtags('Everyone uses # to tag a #special word in #facebook');
printHashtags('The symbol # is known #variously in English-speaking #regions as the #number sign');
