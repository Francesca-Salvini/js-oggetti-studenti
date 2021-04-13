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

    // creo un array di oggetti studenti
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
   
    // stampo a schermo le proprietà 
    // degli oggetti contenuti nell'array

    for ( var i= 0 ; i < arrayStudenti.length; i++) {
        var thisStudenti = arrayStudenti[i];
        console.log(thisStudenti);

        console.log(thisStudenti.nome);
        console.log(thisStudenti.cognome);
    }
    

    // FINE SECONDO ESERCIZIO

    // TERZO ESERCIZIO

    // chiedo all'utente tramite (3) prompt di fornire nome, cognome, età
    // creo un oggetto con le proprietà fornite dall'utente

    var datiUtente = {
        "nome" : prompt("Dimmi il tuo nome"),
        "cognome" : prompt("Dimmi il tuo cognome"),
        "eta" : parseInt(prompt("Dimmi la tua età"))
    }

    // lo pusho nell'array degli oggetti studenti
    console.log(datiUtente);
    arrayStudenti.push(datiUtente);
    
    // FINE TERZO ESERCIZIO
});