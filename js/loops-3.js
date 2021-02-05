console.log('connected...')

/*
1. Ask the user to input a number.
2. Check to see if the number user typed is a number.
3. If user did not enter valid number, ask user to input a number again.
4. if the number is divisible by 3, alert 'chimi'
5. if the number is divisible by 5, alert 'changas'
6. if the number is divisible by 3 and 5, alert 'chimichangas!'.
7. Count from 1 to the value entered by the user.
8. Give every number it's own line of output.
7. Display output.
8. Numbers divisible by 3 will be replaced with 'chimi'.
9. Numbers divisible by 5 will be replaced with 'changas'.
*/

let userInput = prompt('Enter a number!');
let lineNumber;

if (isNaN(userInput)) {
        alert('You have not entered a number...refresh')
    } else {
        for (let i= 1; i <= userInput; i++) {
                if ( userInput % 3 === 0 && userInput % 5 === 0) {
                    document.querySelector('p').innerHTML = 'chimichangas'
                } else if ( userInput % 3 === 0) {
                    document.querySelector('p').innerHTML = 'chimi'
                } else if ( userInput % 5 === 0) {
                    document.querySelector('p').innerHTML = 'changas'
                } else {
                    document.querySelector('p').innerHTML = i;
            for (let j=1; j<=i; j++) {
                document.querySelector('p').innerHTML += '<br>';
            }
        }
    }
} 