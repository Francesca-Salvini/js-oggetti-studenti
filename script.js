// CONSEGNA
//
// Creare un oggetto che descriva uno studente, 
// con le seguenti proprietà: nome, cognome e età.
//
// Stampare a schermo attraverso un ciclo for-in 
// tutte le proprietà dell'oggetto.
//
// Creare un array di oggetti di studenti.
//
// Ciclare su tutti gli studenti e 
// stampare per ognuno di essi, nome e cognome.
//
// Dare la possibilità all’utente, attraverso 3 prompt(), 
// di aggiungere un nuovo oggetto studente inserendo 
// nell’ordine: nome, cognome e età.


$(document).ready(function(){

    // creo un oggetto che descrive nome, cognome ed età di uno studente
    var studente = {
        "nome" : "Mario",
        "cognome" : "Rossi",
        "eta" : 23
    }
    
    // stampo a schermo (console.log) tutte le proprietà dell'oggetto
    for( var key in studente) {
        console.log(studente[key]);
    }
});