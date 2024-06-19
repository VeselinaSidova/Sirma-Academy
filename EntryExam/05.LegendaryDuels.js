function checkIfFightIsLegendary(input) {
    let fightStack = [];
    let isLegendary = true;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '('
            || input[i] === '{'
            || input[i] === '!' && fightStack[fightStack.length - 1] !== '!') {
            fightStack.push(input[i]);
            continue;
        } else if (fightStack.length === 0) {
            isLegendary = false;
            break;
        }

        let previousMove = fightStack.pop();
        if ((input[i] === ')' && previousMove !== '(')
            || (input[i] === '}' && previousMove !== '{')
            || (input[i] === '!' && previousMove !== '!')) {
            isLegendary = false;
            break;
        }
    }

    if (fightStack.length > 0) {
        isLegendary = false;
    }

    console.log(isLegendary ? 'Legendary' : 'Not Legendary');
}

checkIfFightIsLegendary("()()(()())");
// checkIfFightIsLegendary("((!!)(({!!})))");
// checkIfFightIsLegendary("((())");
// checkIfFightIsLegendary("{!}!");
// checkIfFightIsLegendary("({(!!}))");
// checkIfFightIsLegendary("!()!");



