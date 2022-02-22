let myString = `Hello
World
my name
is
Harvey`

console.log(myString);


let anotherString = 'Hello\nworld\nmy name\nis\nHarvey';

console.log(anotherString);

console.log(`Six times five = ${5*6}`);

//arrow functions

let creatFullName =( firstName, lastName ) => `${firstName} ${lastName}`;
let someFunction = (a, b) => {
    let result =``;
    for (let i = 0; i < b; i++){
        result += a;
    }
    return result;
};




console.log(creatFullName('Tom', 'Sawyer'));
console.log(someFunction('Hello', 3));


//callbacks
let username = sendHttpRequest('getUser')
console.log(username);
function logUsername(user){
    console.log(user);
}


sendHttpRequest('getUser', logUsername);
sendHttpRequest('getUser', user => console.log(user));

//Promises

function handleEvent(value){
    console.log(value);
}
function handleError(err){
    console.log(err);
}
doSomethingThatReturnsAPromise()
    .then(handleEvent)
    .catch(handleError);


//Convert the following function into an arrow function. Refer to the new function as returnSquareRoot.
//function myFunction(num) { return Math.sqrt(num); }
// my wrong answer
// let myFunction = [input];
// let returnSquareRoot = myFunction.map ((input) => { return Math.sqrt(input);});
// console.log (returnSquareRoot);

//answer
//let returnSquareRoot = (num) => Math.sqrt(num);


//Convert the following function into an arrow function. Refer to the new function as monthlyPayment.

//let monthlyPayment = (yearlyPayment) =>{
//     let monthly = yearlyPayment / 12;
//     return monthly.toFixed(2);
// };


//Convert the following function into an arrow function. Refer to the new function as returnSum.

function addTwoInputs(a,b) { return a+b; }
//my answer
const returnSum = (a,b) => {
    return a + b;
}
//their answer
let returnSum = (a,b) => a+b;

//Convert the following function into an arrow function. Refer to the new function as pythagoras.
//function myFunction(num1, num2) { return Math.sqrt((num1*num2)+(num2*num2)); }

let pythagoras = (num1, num2) => Math.sqrt ((num1*num2)+(num2*num2));


//Convert the following function into an arrow function. Refer to the new function as revert.
//function myFunction(value){ return !value; }

let revert = (value) => !value;

//Convert the following function into an arrow function. Refer to the new function as returnNumber.
// function myFinction(num) {
//     return `Your number is $(num)`
// }

//my answer
let returnNumber = (num) => ('Your number is ')+(num);
//their answer
let returnNumber = (num) => `Your number is ${num}`;

//Convert the following function into an arrow function. Refer to the new function as fancyAlgorithm.

function myFunction(num1, num2, num3){
    let value = 0;
    for(let i = 0; i<num3; i++){
        value = (value + num2) *num1;
    }
    return value / (num1 * (num3 *10));
}

//my answer
let fancyAlgorithm = (num1, num2, num3) => {
    
    let value = 0;
   for(let i = 0; i<num3; i++){
       value = (value + num2) *num1;
   }
   return value / (num1 * (num3 *10));

};



//their answer
let fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for(let i = 0; i < num3; i++){
        value = (value + num2) * num1;
    }
    
    return value / (num1 * (num3 * 10));
}



//Convert the following function into an arrow function. Refer to the new function as xor.
function myFunction(num1, num2){
    return num1 ^ num2;
}

//my answer 
let xor = (num1, num2)=> num1^ num2;