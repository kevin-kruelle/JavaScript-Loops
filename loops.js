console.log('conected...')

const generatedNumber = Math.floor(Math.random() * 20) + 1;
let numberOfGuesses = 0;

do {
    let userGuess = prompt('Guess a number between 1 and 20.')
    numberOfGuesses++
    if (userGuess == generatedNumber) {
        alert('You guessed the right number!')
        break;
    } else {
        alert('wrong, try again')
    }
} while (numberOfGuesses < 5)