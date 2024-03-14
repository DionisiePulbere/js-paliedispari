// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// far scegliere all'utente pari o dispari 
const userChoice = prompt("Pari o Dispari?");

// far scegliere all'utente un numero da 1 a 5  
const userNumber = parseInt(prompt("Scegliere un numero da 1 a 5"));

// generare un numero da 1 a 5 tramite funzione del computer
const computerNumber = getRndInteger(1, 5);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// sommare i due numeri 
let sum = (computerNumber + userNumber);

// stabilire la variabile della funzione 
let userNumberEvenOrOdd = isEvenOrOdd(sum);

// stabilire se la somma è pari o dispari mediante una funzione 
function isEvenOrOdd(sum){
    let evenOrOdd;
    if(sum % 2 === 0){
        evenOrOdd = "pari";
    } else {
        evenOrOdd = "dispari";
    }

    return evenOrOdd;
}
// stabilire se l'utente a vinto o no 
let userMessage;
if (userChoice === userNumberEvenOrOdd){
    userMessage = "hai vinto!"
} else {
    userMessage = "hai perso, riprova è sarai più fortunato!"
}
// stamapre il risultato 
alert(`Hai scelto ${userChoice}, il tuo numero è ${userNumber}, il numero del computer è ${computerNumber}, la somma è ${sum} quindi ${userMessage}`)