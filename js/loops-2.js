console.log('conected...')

/*
1. Ask the user to input a number.
2. Asign charactor that will create a triangle to a variable.
3. Check to see if the number user typed in is a number.
4. If user did not enter valid number, ask user to input a number again.
5. If user did enter a number, create and else statement with a for loop nested.
6. define the first for loop. i equal to 1.
7. loop i will run until it is less than or equal to userInput.
8. if i is less than or equal to userInput, add 1.
9. define a variable that will hold a space in between each character so that the loop resets each time around.
10. Create a nested loop inside of the first for loop.
11. j = 1
12. let j run and increment by 1 until it is greater than the first loop.
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