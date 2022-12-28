const textElement = document.getElementById('text')
const continueElement = document.getElementById('continue')
const counterElement = document.getElementById('coinCounter')
const endElement = document.getElementById('end')
const restartElement = document.getElementById('restart')
const endTextElement = document.getElementById('endText')
let daubloon = 5

function startGame() {
    daubloon = 5
    endElement.hidden = true
    continueElement.hidden = false
    restartElement.hidden = true
    textElement.innerHTML = "Welcome to the Daubloon Game. A stupid game by Alex Cat as practice to understand implementing JS into HTML."
    counterElement.innerHTML = "Start with these 5 daubloons and be on your way."
    endTextElement.innerHTML = "Please note that no Daubloons gained here have been acknowledged by the Daubloon Authorities. Please watch out for fake daubloons still!"
}
continueElement.onclick = nextEncounter
endElement.onclick = gameOver
restartElement.onclick = startGame

function nextEncounter() {
    const greeting = ['Traveler', 'Wanderer', 'Lost soul', 'Adventurer', 'Vegabond'];
    const home = ['abode', 'cave', 'hovel', 'hut', 'burrow'];
    const dbname = ['daubloons', 'dabaloons', 'dubloons', 'dabolons', 'dubsloons'];
    const item = ['gum', 'soup', 'rope', 'soda'];
    let coin = 0
    if (Math.floor(Math.random() * 4) > 0) {
        let db = dbname[Math.floor(Math.random()*5)]
        coin = Math.ceil(Math.random() * 20);
        textElement.innerHTML = 'Welcome ' + greeting[Math.floor(Math.random()*5)] + ', step into my ' + 
        home[Math.floor(Math.random()*5)] + '. Please take these ' + coin + " " + db + 
        ' and some ' + item[Math.floor(Math.random()*4)] + '. Now hurry and be on your way!'
        if (db === 'daubloons' || db === 'dubloons') {
            daubloon = daubloon + coin
            endTextElement.innerHTML = 'You gained ' + coin + " " + db + '!'
        } else {
            endTextElement.innerHTML = "Wait a minute... these aren't real. Guess it's time to move on"
        }

    } else {
        coin = Math.ceil(Math.random() * 20)
        textElement.innerHTML = 'Have at ye, ' + greeting[Math.floor(Math.random()*5)] + '! hand over your '
        + coin + ' coins or you shant live to see the morn!';
        daubloon = daubloon - coin;
        endTextElement.innerHTML = "You lost " + coin + " daubloons."
    }
    counterElement.innerHTML = 'You have ' + daubloon + ' daubloons now.'
    if (daubloon <= 0) {
        continueElement.hidden = true
        endElement.hidden = false
    }

}
function gameOver() {
    textElement.innerHTML = "You've lost your last coin. Return to your home and sell everything you've gained to restart your journey."
    endElement.hidden = true
    continueElement.hidden = true
    restartElement.hidden = false
}
startGame()