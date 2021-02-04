console.log('conected...')

const generatedNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;

do {
    let userGuess = prompt('Guess a number between 1 and 100.')
    numberOfGuesses++
    if (userGuess == generatedNumber) {
        document.querySelector('h1').innerHTML = 'You guessed the right number'
        break;
    } else if (userGuess < generatedNumber) {
        alert('You guessed too low')
    } else if (userGuess > generatedNumber) {
        alert('You guessed too high.')
    }
} while (numberOfGuesses < 5)