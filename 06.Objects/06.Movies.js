function printMoviesInJSON(input) {
    let movies = [];


    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('addMovie')) {
            let parts = input[i].split(' ');
            parts.shift();
            let movieName = parts.join(' ');
            let movie = {
                name: movieName,
            }
            movies.push(movie);
        } else if (input[i].includes('directedBy')) {
            let parts = input[i].split(' directedBy ');
            let movieName = parts[0];
            let director = parts[1];

            for (let j = 0; j < movies.length; j++) {
                if (movies[j].name === movieName) {
                    movies[j].director = director;
                }
            }
        } else if (input[i].includes('onDate')) {
            let parts = input[i].split(' onDate ');
            let movieName = parts[0];
            let date = parts[1];

            for (let j = 0; j < movies.length; j++) {
                if (movies[j].name === movieName) {
                    movies[j].date = date;
                }
            }
        }
    }

    for (const movie of movies) {
        if (Object.keys(movie).includes('name')
            && Object.keys(movie).includes('director')
            && Object.keys(movie).includes('date')) {
            let movieJSON = JSON.stringify(movie);
            console.log(movieJSON);
        }
    }
}

printMoviesInJSON([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    ' Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

printMoviesInJSON([
    'addMovie The Avengers',
    'addMovie Spiderman',
    'The Avengers directedBy Pesho Peshov',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    'The Avengers directedBy Anthony Russo',
]);