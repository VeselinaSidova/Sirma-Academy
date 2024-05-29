function progressBar(number) {
    let progressBar = '';

    for (let i = 0; i < number / 10; i++) {
        progressBar += '%';
    }

    if (progressBar.length < 10) {
        for (let index = progressBar.length; index <= 10; index++) {
            progressBar += '.';
        }
        console.log(`${number}% [${progressBar}]`);
        console.log('Loading...');
    } else {
        console.log(`${number}% [${progressBar}]`);
        console.log('Complete!');
    }
}

progressBar(30);
progressBar(50);
progressBar(100);
