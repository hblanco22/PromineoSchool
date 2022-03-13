// class Card {
//   constructor(face, suit, value) {
//       this.face = face;
//       this.suit = suit;
//       this.value = value;
//   }
// }
// class Deck {
//   constructor() {
//       this.cards = [];    
//   }      
//   createDeck() {
//       let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//       let suits = ['clubs', 'diamonds', 'hearts', 'spades'];        
//       let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//       for (let i = 0; i < faces.length; i++) {
//           for (let v = 0; v < suits.length; v++) {
//               this.cards.push(new Card(faces[i], suits[v], values[v]));
//           }
//       }
//   }
//   shuffleDeck() {
//      let location1, location2, tmp;
//      for (let i = 0; i < 1000; i++) {
//          location1 = Math.floor((Math.random() * this.cards.length));
//          location2 = Math.floor((Math.random() * this.cards.length));
//          tmp = this.cards[location1];
//          this.cards[location1] = this.cards[location2];
//          this.cards[location2] = tmp;
//       }
//   }
// }



class War {
  constructor() {
    this.player1Score = 0
    this.player2Score = 0
    this.rounds = 0
    console.log('War has Begun')
    this.playRound()
  }

  getCard() {
    return Math.floor(Math.random() * 13) + 1
  }

  playRound() {
    this.rounds++
    let player1Card = this.getCard()
    let player2Card = this.getCard()
    let winner = null
    if (player1Card > player2Card) {
      this.player1Score++
      winner = 'Player 1'
    }
    if (player2Card > player1Card) {
      this.player2Score++
      winner = 'Player 2'
    }
    let outcome = `Player 1 Draws ${player1Card}\n`
    outcome += `Player 2 Draws ${player2Card}\n`
    outcome += winner ? `${winner} wins`:'Round tied'
    console.groupCollapsed('Round '+this.rounds)
    console.log(outcome)
    console.log('Player 1 score,', this.player1Score, ' ', 'Player 2 score ',  this.player2Score)
    console.groupEnd()
    if (this.player1Score > 13 || this.player2Score > 13) {
      this.endWar()
  
    } else {
      this.playRound()
    }
      

    } 
  

  endWar() {
    const { player1Score, player2Score } = this
    let winner = player1Score > player2Score ? 'Player 1':'Player 2'
    console.log(`${winner} has won the war.`)
  }
  
}

// Start a war
new War()