//Week3 coding Assignment


//question 1
let ages = [3, 9, 23, 64, 2, 8, 28,93, 120];
//question 1.a
var agesFirstNumber = ages[0];
console.log(agesFirstNumber);
var agesLastNumber = ages.pop();

console.log(agesLastNumber);

//question 1.b
console.log(agesLastNumber - agesFirstNumber);



var i, sum=0;

for(i=0; i<ages.length; i++){
    sum = sum + ages[i];

}


console.log(sum/ages.length)

// let lengths = ages.map(function(element){
//     return element.length;
// });
// console.log(lengths);


// console.log(ages.pop());
// console.log(ages);



let names = [ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob' ];

let namesValue = 0;
let someOfNames = names.reduce((previousValue, currentValue) => previousValue + currentValue, namesValue
);

console.log(someOfNames);


let namesLengths = names.map(function(element){
    return element.length;
});
console.log(namesLengths);

let sumOfNames2 = namesLengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

console.log(sumOfNames2);