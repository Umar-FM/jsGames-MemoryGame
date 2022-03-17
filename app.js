import {cardArray} from "./cardArray.js";

cardArray.sort(() => 0.5-Math.random())

const gridDisplay = document.querySelector('#grid')
const resultsDisplay = document.querySelector('#result')

let cardsChosen =[]
let cardsChosenId = []
const cardsWon = []


function createBoard(){
    for (let i = 0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','image/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    if (cardsChosenId[0] == cardsChosenId[1]){
        alert("You clicked the same card!")
        cards[cardsChosenId[0]].setAttribute('src','image/blank.png')
        cards[cardsChosenId[1]].setAttribute('src','image/blank.png')
    }
    else{
        if (cardsChosen[0] === cardsChosen[1]){
        
            cards[cardsChosenId[0]].setAttribute('src','image/white.png')
            cards[cardsChosenId[1]].setAttribute('src','image/white.png')
            cards[cardsChosenId[0]].removeEventListener('click',flipCard)
            cards[cardsChosenId[1]].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        } else{
            cards[cardsChosenId[0]].setAttribute('src','image/blank.png')
            cards[cardsChosenId[1]].setAttribute('src','image/blank.png')
        }
    }
    
    resultsDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenId = []

    if (cardsWon.length == cardArray.length/2){
        resultsDisplay.textContent = "YOU WIN!"
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}