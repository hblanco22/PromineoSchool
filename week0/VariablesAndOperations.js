//create a variable to hold the quantity of available plane seats left on a flight
var availablePlaneSeats = 6;
		
//create a variable to hold the cost of groceries at checkout
var costOfGroceries = 23.64;

//create a variable to hold a person's middle initial
let middleIntial = 'G';

//create a variable to hold true if it's hot outside and false if it's cold outside
var isHotOutside = false;
//create a variable to hold a customer's first name
var customerFirstName = "Sally";

//create a variable to hold a street address
var streetAddress = "1234 W Easy St";

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleIntial);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats -2;
console.log(availablePlaneSeats);


//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries);



//birth certificate was printed incorrectly, change the middle initial to something else
middleIntial =  'C';
console.log(middleIntial);


//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customerFirstName + ' ' + middleIntial + ' ' + 'Smith';
console.log(fullName);
    

//print a line to the console that introduces the customer and says they live at the address variable
console.log('Hi, My name is ' + fullName + 'an I live at ' + streetAddress + '.');






var ageRequiredToDrive = 16;

var currentAge = 13;



if (testMe = currentAge >= ageRequiredToDrive) {

    console.log('This person can drive');

}

console.log(currentAge);
console.log('test person can drive')

var newTest = 12;

if (newTest) {

    console.log('testme');

}


var costOfEggs = 2.12;

var numberOfDozensOfEggsToPurchase = 0;

if (costOfEggs > 3) {

  numberOfDozensOfEggsToPurchase = 1;

} else if (costOfEggs > 2) {

  numberOfDozensOfEggsToPurchase = 2;

} else if (costOfEggs > 1) {

  numberOfDozensOfEggsToPurchase = 3;

} else {

  numberOfDozensOfEggsToPurchase = 4;

}

console.log('I will buy ' + numberOfDozensOfEggsToPurchase + ' dozen eggs.');
var ageRequiredToDrive = 16;

var currentAge = 14;

if (currentAge >= ageRequiredToDrive) {

  console.log('This person can drive');

} else {

  console.log('This person cannot legally drive');

}
