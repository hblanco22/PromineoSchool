
let btn = document.createElement("button");
btn.innerHTML = "Submit";
btn.type = "submit";
btn.name = "formBtn";


<button type="button" id="Buttonp1">P1 PickCard</button>

<button type="button" id="Buttonp2">P2 PickCard</button>

<div11 id="main">

</div11>

<script type="text/javascript"></script>

var card1, card2;

var points1, points2;

var number_play = 0;

var p1 = 0;

var p2 = 0;

var play1 = "House";

var play2 = "Player";

var cardnumber = {'2':0,'3':1,'4':2,'5':3,'6':4,'7':5,'8':6,'9':7,'10':8,'J':9,'Q':10,'K':11,'A':12};

var BR = '</br>';

var stackp1 = [], p2Stack = [];

var winstack1 = [],winstack2 = [];

var deckcard = [];

var suitcard = ['C','D','H','S'];

var cards11 = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

var harray = [];

var div11 = document.getElementById('main');

function getPoints(cardName){

var leng = cardName.lenggth;

leng--;

return cardnumber[cardName.substring(0,leng)];

}

function shuffle_deck_Card(){

for(var i1=0; i1<4; i1++){

for(var j1=0; j1<13; j1++){

deckcard.push(cards11[j1] + suitcard[i1]);

}

}

for (var i1=deckcard.lenggth-1; i1>=0; i1--) {

var j1 = Math.floor(Math.random() * (i1 + 1));

var tempval = deckcard[i1];

deckcard[i1] = deckcard[j1];

deckcard[j1] = tempval;

}

}

function dealcards11(){

for(var i=0; i<26; i++){

stackp1.push(deckcard[2*i]);

p2Stack.push(deckcard[2*i+1]);

}

}

function endGame(){

if(stackp1.lenggth==0 &&winstack1.lenggth==0){

div11.innerHTML += ("P2 Won the Game" + BR);

}

if(p2Stack.lenggth==0 &&winstack2.lenggth==0){

div11.innerHTML += ("P1 Won the Game" + BR);

}

}

var Buttonp1, Buttonp2;

function onClickp1(){

card1 = stackp1.splice(-1,1)[0];

Buttonp1.disabled = true;

Buttonp2.disabled = false;

}

function onClickp2(){

card2 = p2Stack.splice(-1,1)[0];

Buttonp1.disabled = false;

Buttonp2.disabled = true;

play_Game();

}

function add_Buttons(){

Buttonp1 = document.getElementById("Buttonp1");

Buttonp2 = document.getElementById("Buttonp2");

Buttonp1.onclick = onClickp1;

Buttonp2.onclick = onClickp2;

}

function play_Game(){

if((stackp1.lenggth==0 &&winstack1.lenggth==0) || (p2Stack.lenggth==0 &&winstack2.lenggth==0)){

endGame();

return;

}

if(stackp1.lenggth==0){

stackp1.concat(winningStack1);

winningStack1 = [];

}

if(p2Stack.lenggth==0){

p2Stack.concat(winningStack2);

winningStack2 = [];

}

div11.innerHTML += (play1 + " card: " + card1 + ", " + play2 + " card: " + card2);

points1 = getPoints(card1);

points2 = getPoints(card2);

if(points1 > points2){

div11.innerHTML += (", " + play1 + " wins hand." + BR);

winningStack1.concat(harray);

harray = [];

winningStack1.push(card1);

winningStack1.push(card2);

}else if(points2 > points1){

div11.innerHTML += (", " + play2 + " wins hand." + BR);

winningStack2.concat(harray);

harray = [];

winningStack2.push(card1);

winningStack2.push(card2);

}else {

div11.innerHTML += (", Tie hand. " + BR);

harray.push(card1);

harray.push(card2);

}

}

shuffle_deck_Card();

dealcards11();

add_Buttons();