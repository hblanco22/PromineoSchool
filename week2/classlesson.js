//let question = prompt('What is your question?').toLocaleLowerCase();

// if(question.includes('love')){
//     alert('Nope!');
// }else if(question.includes('hate')){
//     alert('Yeah');
// }else {
//     alert('Maybe');
// }



// switch(question){
//     case question.includes('love'):
//         alert('nah')
//         break;
//     case question.includes('puppies'):
//         alert('yeah')
//         break;
//     case question.includes('hate'):
//         alert('yeah')
//         break;
//     default:
//         alert(('maybe'))
// }


//for loops

// for(let i = 0; i <10; i++){
//     console.log(i);
// }



// let students = ['Tommy', 'Betty','Barney']
// for(let student in students){
//     alert(student);
// }
// 
// 
// 
// ask

// % = modulo

// var destinationNumber = prompt('Pick a number')
// for(let i = 1; i <=destinationNumber; i++){
//        if(i % 3 === 0   ){
//            console.log('Fizz');
//        }else if(i%5 === 0){
//            console.log('Buzz');{
               
//            }
//        }
// }


// var username = prompt('Username:');

// var password = prompt('Password:');


// if (username == 'samy123' && password == '12345') {

//     alert('Welcome back, ' + username);

// } else {

//     alert('Inaccurate credentials!');

// }


// var loggedIn = false;


// while (!loggedIn) {

//     var username = prompt('Username:');

//     var password = prompt('Password:');

//     if (username == 'samy123' && password == '12345') {

//         alert('Welcome back, ' + username);

//         loggedIn = true;

//     } else {

//         alert('Inaccurate credentials!');

//     }

// }




//Openclass - JavaScript Week2 =Loops
//Create a do/while loop that will print the userNumber and then add 6 after each loop. Stop the loop once the number is greater than or equal to 100.


// //write your code here
// do {
//     console.log(userNumber);
//     userNumber = userNumber + 6;
// } while(userNumber <= 100);



//Write a for loop that prints the numbers 0 to x. The x has been initialized for you and will be based on a user's input.

//* my answer
// for(let i = 0; i<=input; i++){
//     console.log(i)
// }

//* class answer
// for ( var i = 0; i <= x; ++i ) {
//     console.log(i);
// }





//* Fizz, Buzz


// var destinationNumber = prompt('Pick a number.');


/**
 * % = modulo
//  */

// for(let i = 1; i <= destinationNumber; i++) {
//     if((i % 5 === 0) && (i % 3 === 0)) {
//         console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }

//**question 3 */

// Write a for loop that loops from 1-100 and prints the iteration count and "foo" if the iteration count is even.

// For example, if the iteration count is 2, then the console would read "2 foo". The final output should be "100 foo". Notice there is a space between the number and foo.


// my answer
//write your code here

// for(let i =1; i <= 100; i++){
//     if(i % 2 ===0 )
//         console.log(i + ' foo');
// }





// //Create a for loop that prints out a multiplication table for num from 1 through 10 as follows (the value of num will be input by the user):
// //my code
// for ( var i = 1; i <= 10; i++){
//     console.log((1)+(" x ")+(i) + (" = ")+(1 * i));
    
// //    console.log(input * i);
// }
// // there code
// for(var i=1; i<=10; i++) {
//     console.log(num +" x " + i + " = " + (num*i) );
// }




// Let's play a game. The game will consist of 100 turns. 
// If the number of turns is even, you gain 5 points. 
// If it's odd, you gain 3 points. 
// If ever your score is equal to 125, you are reset back to 25 points. 
// This will only be allowed to happen once. 
// The game ends if you are able to make it through 100 turns 
// or you reach more than 290 points, whichever comes first.

// Using a for loop, create the game.

// for(var i = 0; i < 100 && points < 290; i++){
//     if(points == 125 && pointsReset === false){
//         points = 25;
//         pointsReset = true;
//     } else if(i % 2 === 0){
//         points = points + 5;
//     } else {
//         points = points + 3;
//     }
    
//     console.log("Turns: " + i + " Score: " + points)
// }






// //Write a for loop that prints every third number from 0 up to, and including, 99.


// //write your code here
// for( i=0; i<=99; i++){
//     if(i % 3 === 0){
//      console.log(i);
//     }
//  }
 


var i = 0;
do{
    if(i % 3 === 0){
    console.log
    }
    i++
}
while (i <= 99)




//write your code here
for(var i = 1; i<=input; i++){
    console.log("The bowl contains "+i+" cups of rice.");
}
console.log("We have enough rice!");




//This is just one example using a while loop

while(currentCupsOfRice != requiredCupsOfRice){
    console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}
console.log('We have enough rice!');








//Check to see if userNumber is between 1 and 100. 
//If it is, create a while loop that prints all integers starting with userNumber to 100. 
//If not, print "Your number was not between 1 and 100."

//write your code here
var counter = userNumber;
if ( userNumber <= 100 && userNumber >= 1 ) {
    while ( counter <= 100 ) {
        console.log(counter++);
    }
} else {
    console.log("Your number was not between 1 and 100.");





    // Write a while loop that does a countdown from the variable countdown. 
    // This number represents the number that a user enters. 
    // Check to make sure the number is not larger than 10, but greater than or equal to 3.
    //  Each time the loop runs, print to the console the value of the counter 
    //  followed by three periods (…). Once out of the loop, print to the console 
    //  "We have lift off!". If a number is less than 3 or greater than 10, then the 
    //  only message printed to the console is "We have lift off!"


    if (countDown <= 10 && countDown >= 3){
        while(countDown >= 1){
            console.log(countDown-- + '...')
        }
    
    }
    console.log("We have lift off!");
}



