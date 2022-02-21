// Arrays and functions from video training.
var customNames =[]
customNames.push('Sam Smith');
customNames.push('Tommy Guns');
customNames.push('Chris P. Bacon');


for(let i =0; i < customNames.length; i++){
    console.log(customNames[i]);

}

for(name of customNames){
    console.log(name);
}


function myFunction(){
    for (i=0;i<19;i++){
        console.log(i);
    }
}
myFunction();


function createFullName(firstName, lastName){
   return firstName + ' ' + lastName;
}

var fullName = createFullName('Tom', 'Sawyer');
console.log('Welcome, ' + fullName);


//intermediate array x5 map, reduce, for each, filter, splice

//map
let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map(function(element){
    return element.length;
});
console.log(lengths);

//reduce
let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
//added 10 to the total.    
}, 10);
console.log(sum);

//for each
names.forEach(function(element){
    console.log(element);

});

//filter
let evens =names.filter( function(element){
    return element.length % 2 == 0;
});
console.log(evens);

//splice
let removedElement = names.splice(1, 1);
console.log(removedElement);





//objects
var dvdPlayer={
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mulan',
    printDVDName: function() {
        console.log(this.dvdName);

    }


};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();
dvdPlayer.dvdName


//equality - assignment (=), equality (==) , identity (===)

//equality, same value and different type
console.log(2 == '2');
//identity, same valce and type
console.log(2==='2');






//OpenClass week 3 Functions

// //Create a function named checkout that accepts 2 variables named cardBalance and price. 
// If the price is more than the card balance, return false. 
// Otherwise, return the new card balance.
var cardBalance = 17;
var price = 3;

function checkout(cardBalance, price){
    if(price > cardBalance) { return false; }
    else { return cardBalance - price; }
}






// Create a function called isBlue. It takes one parameter. Return true if it is passed "blue", otherwise return false.

// The passed value can be "blue" with any of the letters capitalized as well. 
// (i.e."Blue", "bLue", "BLUE", etc…) All forms of the word blue should return true. 
// Use toLowerCase() on the passed value to accomplish this. For example, myVariable.toLowerCase() 
// will convert whatever myVariable is to all lowercase.




//write your code below

var var1 = "blue";


function isBlue(var1){
    return var1.toLowerCase() === "blue";
}







//Write a function called printArray that accepts an array as an argument. 
//Create a loop that will print each value of the passed in array.

function printArray(array){
    for(let i=0; i < array.length; i++){
        console.log(array[i])
    }
}