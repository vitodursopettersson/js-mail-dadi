'use strict'

// Creo un array
const registeredUsers = ['vitodurso98@gmail.com', 'fragola86@hotmail.it', 'banana33@live.it']

// Definisco variabile imput email
const userEmail = prompt('Inserisci la tua email')
console.log("Richiesta di acesso con l'email:", userEmail)

// Controllo se è presente nell'array
for (let i = 0; i < registeredUsers.length; i++) {
    if (registeredUsers[i] === userEmail) {
        console.log('Accesso eseguito');
        break
    } else if (i = registeredUsers) {
        console.log('Accesso negato, autodistruzione tra 3...')
    }
}