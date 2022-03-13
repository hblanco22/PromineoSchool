/*
Need:
cards, deck, decks, random, players
suits, numbers, face cards, value of cards, 
tabletop, compare, tie, counter
*/

class Card {
    constructor(suit, face, value) {
        this.suit = suit;
        this.face = face;
        this.value = value;
    }
}
class Deck {
    constructor() {
        this.cards = [];    
    }      
    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < faces.length; j++) {
                this.cards.push(new Card(suits[i], faces[j], values[j]));
            }
        }
    }
    shuffleDeck() {
       let location1, location2, tmp;
       for (let i = 0; i < 1000; i++) {
           location1 = Math.floor((Math.random() * this.cards.length));
           location2 = Math.floor((Math.random() * this.cards.length));
           tmp = this.cards[location1];
           this.cards[location1] = this.cards[location2];
           this.cards[location2] = tmp;
        }
    }
}
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}
class TableTop {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();    
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
   
              
 //this.players[0].playerCards.pop();
   // this.players[1].playerCards.pop();
 
    }
  

    
    }


   


let gameTableTop = new TableTop();
gameTableTop.start('Johnny Appleseed', 'Chris P. Bacon');
console.log(gameTableTop.players);




//above is working
//-----------------------------------------------


// //console.log(gameTableTop.players[0] );
// console.log(gameTableTop.players[0].playerCards[1],' vs ', gameTableTop.players[1].playerCards[1]  );



// // gameTableTop.players[0].playerCards.pop();
// // gameTableTop.players[1].playerCards.pop();



// class War {
//     constructor() {
//       this.player1Score = 0
//       this.player2Score = 0
//       this.rounds = 0
//       console.log('War has Begun')
//       this.playRound()
//    }

//  playRound() {
// //     this.rounds++
    
//  let winner = null
//     if( gameTableTop.players[0].playerCards[1] > gameTableTop.players[1].playerCards[1] ) {
//      this.player1Score++
//     winner = 'Player 1'
//     }
//     else if 
//     ( gameTableTop.players[1].playerCards[1] > gameTableTop.players[0].playerCards[1] ) {
//         this.player2Score++
//         winner = 'Player 2'
//     //console.log('Player 1',  'wins', )
//     }

//     else   
//     ( gameTableTop.players[0].playerCards[1] === gameTableTop.players[1].playerCards[1] )
//     console.log('tie, no winner')

//     console.log('Player 1 score,', this.player1Score, ' ', 'Player 2 score ',  this.player2Score)

// }

// }


  
    
