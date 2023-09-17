let firstPlayerScorer = 0
let secondPlayerScorer = 0
let totalFirstPlayerScorer = 0
let totalSecondPlayerScorer = 0

let playTurn = [false,false]
let diceImage = ["dice_1.png","dice_2.png","dice_3.png","dice_4.png","dice_5.png","dice_6.png"]

function rollDice(){

    let firstDiceValue = Math.floor(Math.random()*6 + 1)
    let secondDiceValue = Math.floor(Math.random()*6 + 1)

    let i = firstDiceValue 
    let j = secondDiceValue

    if (playTurn[0]===false && playTurn[1]===true || playTurn[0]===false && playTurn[1]===false) {

        firstPlayerScorer = firstDiceValue + secondDiceValue
        totalFirstPlayerScorer += firstPlayerScorer

        if (totalFirstPlayerScorer>100) {
            totalFirstPlayerScorer -= firstPlayerScorer
        }
    
        if (firstDiceValue === secondDiceValue) {
            if (firstDiceValue === 1 && secondDiceValue === 1) {
                totalFirstPlayerScorer = 0
                playTurn[0] = true
                playTurn[1] = false
         }
            else{
                if (totalFirstPlayerScorer === 100) {
                    document.getElementById("firstWin-el").innerText = "WINNER"
                    playTurn[0] = true
                    playTurn[1] = true
                    document.getElementById("button-el").disabled = true;
                }
                else{
                    playTurn[0] = false
                    playTurn[1] = true
                }
            }
        }

        else{
            if (totalFirstPlayerScorer === 100) {
                document.getElementById("firstWin-el").innerText = "WINNER"
                playTurn[0] = true
                playTurn[1] = true
                document.getElementById("button-el").disabled = true;
            }
            else{
                playTurn[0] = true
                playTurn[1] = false
            }
        }
        document.getElementById("firstPlayer-el").innerText = totalFirstPlayerScorer
    }

    else if (playTurn[0]===true && playTurn[1]=== false){
        
        secondPlayerScorer = firstDiceValue + secondDiceValue
        totalSecondPlayerScorer += secondPlayerScorer

        if (totalSecondPlayerScorer>100) {
            totalSecondPlayerScorer -= secondPlayerScorer
        }

        if (firstDiceValue === secondDiceValue) {
            if (firstDiceValue === 1 && secondDiceValue === 1) {
                totalSecondPlayerScorer = 0
                playTurn[0] = false
                playTurn[1] = true    
         }
            else{
                if (totalSecondPlayerScorer === 100) {
                    document.getElementById("secondWin-el").innerText = "WINNER"
                    playTurn[0] = true
                    playTurn[1] = true
                    document.getElementById("button-el").disabled = true;
                }
                else{
                    playTurn[0] = true
                    playTurn[1] = false
                }
            }
        }

        else{
            if (totalSecondPlayerScorer === 100) {
                document.getElementById("secondWin-el").innerText = "WINNER"
                playTurn[0] = true
                playTurn[1] = true
                document.getElementById("button-el").disabled = true;
            }
            else{
                playTurn[0] = false
                playTurn[1] = true
            }
        }
        document.getElementById("secondPlayer-el").innerText = totalSecondPlayerScorer
    }

    if (totalFirstPlayerScorer === 100) {
        var trophy = document.getElementById("trophy1-el")
        trophy.src = "Trophy.jpg"
    }
    else if(totalSecondPlayerScorer === 100){
        var trophy = document.getElementById("trophy2-el")
        trophy.src = "Trophy.jpg"
    }
    if(totalFirstPlayerScorer <= 100 && totalSecondPlayerScorer <= 100){
        var image1 = document.getElementById("dice01")
        image1.src = diceImage[i-1]

        var image2 = document.getElementById("dice001")
        image2.src = diceImage[j-1]
    }
}