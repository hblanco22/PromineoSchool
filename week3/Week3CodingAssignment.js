//Week3 coding Assignment


//question 1
console.log('Question 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.');
let ages = [3, 9, 23, 64, 2, 8, 28,93];
console.log(ages);
//question 1.a
console.log('Question 1.a Subtract forst element from last element.');
var agesFirstNumber = ages[0];
//console.log(agesFirstNumber);
var agesLastNumber = ages.pop();

//console.log(agesLastNumber);
console.log(agesLastNumber - agesFirstNumber);

//question 1.b
console.log('Question 1.b Add new age to array and repeat above.');

ages.push(222);
console.log(ages);

var agesFirstNumber = ages[0];
//console.log(agesFirstNumber);
var agesLastNumber = ages.pop();

console.log(agesLastNumber - agesFirstNumber);


//question 1.c
console.log('Question 1.c Calculate Average age. (Average includes new number added).');

let i, sum=0;

for(i=0; i<ages.length; i++){
    sum = sum + ages[i];
}

console.log(sum/ages.length)

// Notes from class on Weds. Try on hoework.
//let lengths = ages.map(function(element){
//     return element.length;
// });
// console.log(lengths);
// console.log(ages.pop());
// console.log(ages);


console.log("Question 2. New array with names.");

let names = [ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob' ];
console.log(names);


console.log("Question 2.a. Average number of letters per name.");
//Failed attempts. Keep for notes.
// let namesValue = 0;
// let someOfNames = names.reduce((previousValue, currentValue) => previousValue + currentValue, namesValue
// );

// console.log(someOfNames);


// let namesLengths = names.map(function(element){
//     return element.length;
// });
// console.log(namesLengths);

// let sumOfNames2 = namesLengths.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// });

// console.log(sumOfNames2);
//notes from Wednesay class.
sum=0;
for( i = 0; i<names.length; i++){
    sum = sum + names[i].length;
}
console.log(sum/names.length);



console.log("Question 2.b. Use loop to iterate and concatenate nameswith spaces.");


