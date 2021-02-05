console.log('conected...')

const randomNum = Math.floor(Math.random() * 100) + 1;
let numOfGuesses = 5;

do {
    let userGuess = prompt('Guess a number between 1 and 100.')
    numOfGuesses--
    if (userGuess == randomNum) {
        document.querySelector('h1').innerHTML = 'You guessed the right number'
        break;
            } else if (userGuess < randomNum) {
                alert(`You guessed too low. You have ${numOfGuesses} tries left`)
            } else if (userGuess > randomNum) {
                alert(`You guessed too high. You have ${numOfGuesses}`)
            }
    } while (numOfGuesses > 1)