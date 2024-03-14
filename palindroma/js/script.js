// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Chiedere all’utente di inserire una parola
const userWord = prompt("Inserire una parola"); 

// inserisco il la parola in una costante che definisce la funzione
const revWord = revertWord(userWord);


// Creare una funzione per invertire la parola
function revertWord(word) {
    let revertedWord = "";
    for (let i = word.length - 1; i >= 0; i--){
        const thisLetter = word[i];
        revertedWord += thisLetter;
    }
    return revertedWord;
}
// controllo se la parola invertita è uguale a quella fornita dall'utente
let userMessage;
if (userWord === revWord){
    userMessage = "La parola è palindroma"
} else {
    userMessage = "La parola non é palindroma"
}

// stampo il messaggioo
alert(userMessage);