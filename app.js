let drawButton = document.querySelector(".button1")
let rematchButton = document.querySelector(".button2")
let roundsLeft = document.querySelector(".rounds_left")
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let playerOneCard = document.querySelector(".card1")
let playerTwoCard = document.querySelector(".card2")
let rounds = 26
let playerOnePoints = 26
let playerTwoPoints = 26
let scoreOne = document.querySelector(".score1")
let scoreTwo = document.querySelector(".score2")
let roundsMessage = document.querySelector(".rounds")
let winnerOneMessage = document.querySelector(".winner1")
let winnerTwoMessage = document.querySelector(".winner2")
let winnerThreeMessage = document.querySelector(".winner3")
let winnerFourMessage = document.querySelector(".winner4")
let drawMessage = document.querySelector(".draw")


function reset(){
    location.reload()
}


// This is the main function and I think it is causing the bug...could look into async/await
// I would double check the play function before messing with this
function randomNum(){
    let random = Math.floor(Math.random() * cards.length)
    playerOneCard.innerHTML = random
    let random2 = Math.floor(Math.random() * cards.length)
    playerTwoCard.innerHTML = random2
}
function decreaseRound(){
    if (rounds >= 1){
        rounds -= 1
        roundsLeft.innerHTML = rounds
    }else{
        drawButton.style.display="none"
        roundsLeft.innerHTML = "Game Over!"
        roundsMessage.style.display="none"
    }
}


// The winner message functions I am pretty sure are working?
function increasePlayerOneScore(){
    playerOnePoints += 1
    scoreOne.innerHTML = playerOnePoints
    winnerOneMessage.style.display="block"
    winnerTwoMessage.style.display="none"

}
function decreasePlayerOneScore(){
    playerOnePoints -= 1
    scoreOne.innerHTML = playerOnePoints
}
function increasePlayerTwoScore(){
    playerTwoPoints += 1
    scoreTwo.innerHTML = playerTwoPoints
    winnerTwoMessage.style.display="block"
    winnerOneMessage.style.display="none"
}
function decreasePlayerTwoScore(){
    playerTwoPoints -= 1
    scoreTwo.innerHTML = playerTwoPoints
}


// this is mostly working; but there is a bug 
// where it occassionally just don't work
// life is pain
function play(){
    if (playerOneCard.innerHTML > playerTwoCard.innerHTML){
      console.log('player one had the higher cards')
      increasePlayerOneScore()
      decreasePlayerTwoScore()
    } else if (playerOneCard.innerHTML < playerTwoCard.innerHTML){
        console.log("player two had the higher card")
        increasePlayerTwoScore()
        decreasePlayerOneScore()
    }else if (playerOneCard.innerHTML == playerTwoCard.innerHTML)
    console.log("its a draw")

}

drawButton.addEventListener("click", () => {
    randomNum()
    decreaseRound()
    play()
})


rematchButton.addEventListener("click", () => {
    reset()
    console.log("this button also works")
})



// This function is not working; but the idea is that when the game is over a special 
// message will display saying who is the winner
function gameOver(){
    if (roundsLeft.innerHTML >= 1 && scoreOne.innerHTML > scoreTwo.innerHTML){
        winnerThreeMessage.style.display = "block"
    }
    else if (roundsLeft.innerHTML >= 1 && scoreOne.innerHTML < scoreTwo.innerHTML){
        winnerFourMessage.style.display = "block"
    }
}