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

    // PRIMO ESERCIZIO
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
    // FINE PRIMO ESERCIZIO

    // SECONDO ESERCIZIO

    var arrayStudenti = [
        {
            "nome" : "Giulio",
            "cognome" : "Bianchi"
        },
        {
            "nome" : "Maria",
            "cognome" : "Verdi"
        },
        {
            "nome" : "Roberto",
            "cognome" : "Gialli"
        }
    ];

    // console.log(arrayStudenti);

    for ( var i= 0 ; i < arrayStudenti.length; i++) {
        var thisStudenti = arrayStudenti[i];
        console.log(thisStudenti);

        for(var key in thisStudenti) {
            console.log( "chiave: " + key + " - valore: " + thisStudenti[key]);
        }
    }

    // FINE SECONDO ESERCIZIO
});