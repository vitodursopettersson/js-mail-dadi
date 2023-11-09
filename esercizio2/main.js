'use strict'

// Variabili dadi
let userDice;
let computerDice;

// Listener pulsante
const rollDice = document.getElementById('roll-dice')
rollDice.addEventListener('click', function () {

    // Genera numero casuale
    userDice = (Math.floor(Math.random() * 6) + 1);
    console.log('Hai fatto:', userDice);
    computerDice = (Math.floor(Math.random() * 6) + 1);
    console.log("L'avversario ha fatto:", computerDice);

    // Calcolo risultato
    if (userDice > computerDice) {
        console.log('Hai vinto!')
    } else if (computerDice > userDice) {
        console.log('Hai perso')
    } else {
        console.log('Hai pareggiato')
    }
})

