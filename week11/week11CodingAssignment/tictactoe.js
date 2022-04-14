const PLAYER_X_CLASS = 'crosses'
const PLAYER_O_CLASS = 'noughts'
const WINNING_ORDER = [
    [0,4,8],
    [2,4,6],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

const spaceElements = document.querySelectorAll('[data-space]')
const tttgridElements = document.getElementById('tttgrid')
const winnerMessageElement = document.getElementById('winnerMessage')
const newgameButton = document.getElementById('winnerMessageText')
const winnerMessageTextElement = document.getElementById('winnerMessageText')
let isPlayer_O_Turn = false

startGame()

newgameButton.addEventListener('click', newgame)

function newgame(){
    isPlayer_O_Turn = false
    spaceElements.forEach(space => {
        space.classList.remove(PLAYER_X_CLASS)
        space.classList.remove(PLAYER_O_CLASS)
        space.removeEventListener('click', handleSpaceClick)
        space.addEventListener('click', handleSpaceClick, { once: true })
    })
    setTttgridHoverClass()
    winnerMessageElement.classList.remove('show')
}