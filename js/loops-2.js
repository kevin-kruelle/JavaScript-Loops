console.log('conected...')

/*
1. Ask the user to input a number.
2. Asign charactor that will create a triangle to a variable.
3. Check to see if the number user typed in is a number.
4.If user did not enter valid number, ask user to input a number again.
4. Write a for loop
5. Set a 
*/


let userInput = prompt('Enter a number!');
let character = '*';

//Right angle triangle pointing up

if (isNaN(userInput)) {
    alert('You have not entered a number...refresh')
} else {

for (let i=1; i<= userInput; i++) {
    let space = ' ';
    for (let j=1; j<= i; j++) {
        space += character;
    } 
    document.querySelector('p').innerHTML += space + '<br>';
    }
}

//Right angle triangle pointing down

if (isNaN(userInput)) {
    alert('You have not entered a number...refresh')
} else {

for (let i=1; i<= userInput; i++) {
    let space = ' ';
    for (let j=userInput; j>= i; j--) {
        space += character;
    } 
    document.querySelector('p').innerHTML += space + '<br>';
    }
}