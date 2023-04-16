// Es - 4 $2

// Dato un Array di oggetti
// Crea una funzione che ritorni la seguente stringa:

// - `< firstName >, < country >` del primo sviluppatore Python che trova
// - `Non ci sono sviluppatori Python` nel caso in cui non ci siano.


// let list = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];

// Risultato `Victoria, Puerto Rico`.

let list = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

//Dichiaro la funzione stamPhrase
function stamPhrase (list , lang) {
    //Utilizzo il metodo .forEach per ciclarmi l'array
    list.forEach((element)=> {
        //if/else --> condizione 
        if (element.language == lang) {
            console.log(`${element.firstName} , ${element.country}`);
        } else {
            console.log(`Non ci sono sviluppatori Python`);
        }
    })
}
stamPhrase (list , 'Python');
