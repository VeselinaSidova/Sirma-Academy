function conductVote(votesArr) {
    let yesCounter = 0;
    let noCounter = 0;
    let abstainCounter = 0;

    for (const vote of votesArr) {
        if (vote === 'Yes') {
            yesCounter++;
        } else if (vote === 'No') {
            noCounter++;
        } else if (vote === 'Abstain') {
            abstainCounter++;
        }
    }

    let votes = {
        Yes: yesCounter,
        No: noCounter,
        Abstain: abstainCounter,
    };

    let highestVote = Math.max(votes.Yes, votes.No);

    if (highestVote === 0) {
        console.log('Abstain');
        return;
    }

    let winners = Object.keys(votes).filter(key => key !== 'Abstain' && votes[key] === highestVote);

    if (winners.length > 1) {
        console.log('Tie');
    } else {
        console.log(winners[0]);
    }
}

conductVote(["Yes", "No", "Yes", "Abstain", "Yes"]);
// conductVote(["No", "No", "Yes"]);
// conductVote(["Yes", "No"]);
// conductVote(["Abstain"]);
// conductVote(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]);
// conductVote(["No", "Abstain", "Abstain"]);
// conductVote(["No", "Abstain", "Abstain", "Yes", "Yes"]);
