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
//notes from Wednesay class. Need to use 'for' loop.
sum=0;
for( i = 0; i<names.length; i++){
    sum = sum + names[i].length;
}
console.log(sum/names.length);



console.log("Question 2.b. Use loop to iterate and concatenate nameswith spaces.");

//notes from Wednesday class.
let combineNames = names[0];
// had to use i=1. i=0 displayed sam twice
for (i =1 ; i<names.length; i++){
    combineNames = combineNames.concat(' ', names[i]);
}
console.log(combineNames);

//read up on concatenate. when to use examples.

console.log("Question 3, Access the last element of any array.");
console.log(names.pop());
//pop removed it. Used push to add back.
names.push('Bob');
//console.log(names);

console.log("Question 4, Access the first element of any array.");
// var namesFirstNumber = names[0];
// console.log(namesFirstNumber);
//This works but below is cleaner.

console.log(names[0]);

console.log("Question 5, New array. Write loop over names array and add length.");

// I don't understand this one. Come back.
// ****************************************** */
let namesArray=['Kelly', 'Sam', 'Kate'];
for(i= 0; i<namesArray.length; i++){
    namesArray[i] = names[i].length;
}
sum=0;
for(i= 0;i<namesArray.length; i++){
    sum= sum+ namesArray[i];
}
console.log(sum);
// console.log('No answer')
//End 5

console.log("Question 6, Calculate sum of all elements.   ");
//******don't understand****** come back to this question, need to make appointment with mentor
var nameLengths = [];
for(i=0; i<names.length; i++){
    nameLengths[i] = names[i].length;
}
sum=0;
for(i=0; i<nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
console.log(sum);



console.log("Question 7, Two parameters word and n.");
function combineNTimes(word, n){
    var con= word;
    for(i=2; i<=n; i++){
        con = con.concat(word);
    }
    return con;

}
//had to use i=2, not sure if this is correct.
console.log(combineNTimes("Hello", 3));

console.log("Question 8, First name and last name combined.");
//used info from varandOper from first week
// let firstName = ('George');
// let lastName = ('Washington');
// fullName = (firstName + " " + lastName);
// console.log(fullName);
//Not function.***Lookup***
//from week3 arraysAndFinctions video(not class), ,  coudl also use concat also.

function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
 }
 
 var fullName = createFullName('Tom', 'Sawyer');
 console.log(fullName);

console.log('Question 9, Array of numbers great than 100.')

let array = [22, 16, 3, 2, 55]
function isGreaterThan100(array){
    sum =0;
    for(i=0; i<array.length;i++){
        sum= sum+array[i];

    }if (sum>100){
        return true;
    }else{
        return false;
    }

}
console.log('Numbers I picked in my array', (array));
console.log(isGreaterThan100(array));
//end 9

console.log('Question 10, Function that takes array and returns average.(I used same numbers/array from previous question)');
function average(array){
    sum=0;
    for(i=0; i<array.length; i++){
        sum= sum + array[i];
    }
    return (sum/array.length);
}
console.log(average(array));
//end 10

console.log('Question 11, Function that compares average of two arrays and returns true if first array is greater.');
let arrayTwo = [120, 155, 22];
console.log('First array', array, 'Second array', arrayTwo);

function compares(array, arrayTwo){
    if(average(array)>average(arrayTwo)){
        return true;
    }else{
        return false;
    }
}
console.log(compares(array, arrayTwo));

//End 11

console.log('Function called willBuyDrink');
let isHotOutside = true;
let moneyInPocket = 12.23;

function willBuyDrink(isHotOutside, moneyInPocket){
    if((isHotOutside) && (moneyInPocket>10.50)){
        return true;
    }else{
        return false;
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));
//End 12

console.log('Question 13, Create your own function. ');


let arrayNewCost = [100000]
let needMoreHelp = true;
let amIGettingBetter = true;
let willIBuyCar =true;

function doesCarCost50k(arrayNewCost){
    sum =0;
    for(i=0; i<arrayNewCost.length;i++){
        sum= sum+array[i];

    }if ((sum>50000) && (willIBuyCar) && (needMoreHelp || amIGettingBetter)) {
        return 'Yay';
    }else{
        return 'Nope';
    }

}
console.log('Will I be getting a new car?', doesCarCost50k(arrayNewCost, needMoreHelp, amIGettingBetter ));

//End13