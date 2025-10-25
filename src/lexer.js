function handleTokenUsed(input) {
    let token = [];

    let current = 0;

    while (current < input.length) {
        let character = input[current];

        if (/\d/.test(character)) {
            let value = '';
            while (/\d/.test(character)) {
                value = character;
                // push the valur to the array
                token.push({ type: "NUMBER", value })
                character = input[current++];
                console.log(token);
            }
            continue;
        }


        if (/[+\-*/]/.test(character)) {
            token.push({ type: "OPERATOR", value: character })
            current++;
            continue;
        }

        let figures = token.filter(figure => figure.type === "NUMBER");
        setNumber(figures.map(figure => <li>{figure.value}</li>));
    }
    return token;
}
console.log(numbre);