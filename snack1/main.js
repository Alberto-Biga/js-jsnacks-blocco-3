//creo array vuoto che riempirò con push numero utente
let list = [];
console.log( list );
// creo let per ciclo while
let somma = 0;
console.log(somma);
// creo ciclo while impostando condizione 
while ( somma < 50) {
    // chiedo numero all'utente
    let number = parseInt( prompt( 'Inserisci un numero.' ) );
    console.log( "numero inseriro " + number ); 
    // pusho il numero nell'array vuoto
    list.push( number );    
    console.log( list );
    //sommo numeri array
    somma += number;
}
//totale somma
console.log(somma);