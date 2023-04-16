// Es - 3 $2

// Dato un array di oggetti, crea una funzione che ritorni

// - `true` se c’è almeno una persona che ha gli occhi verdi; 
// - `false` se nessuno ha gli occhi verdi


// let list = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
// ];

// Risultato true

let list = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
];

//Dichiaro la funzione TrueOrFalse
function TrueOrFalse(array, eyes) {
    //Dichiaro una variabile di appoggio
    let check = false;
    //Utilizzo il metodo .forEach() per ciclarmi gli n-elementi dell'array
    array.forEach((element)=> {
        //Uso un if per confrontarmi la propietà eyes negli ogg. dell' array = list con il parametro formale eyes
        if (element.eyes.toLowerCase() == eyes.toLowerCase()){
            check= true;
        }
    })
    return check;
}
//Invoco nel consol.log la funz. 
console.log(TrueOrFalse(list,'Green'));
 