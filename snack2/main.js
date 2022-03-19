//chiedo numero all'utente
const numeroArray = parseInt( prompt( 'Inserisci un numero' ) );
//genere tanti array quanti numero utente
let i = 0;
while ( i < numeroArray ){
    //genero nuovo array
    let arrayGenerato = [];
    //ciclo for per riempire nuovo array con push di 10 numeri random
    for ( let x = 0; x < 10; x++){        
        arrayGenerato.push( Math.floor(Math.random() *100 ) +1 )
    }
    console.log(arrayGenerato)
    i++
}