// Es - 2 $1

// Dato un array di oggetti crea una funzione che ritorni un array e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore
// Awe < firstName >, io lavoro con < language here >, ma effettivamente è meglio javascript

// ES.



// Risultato :

//     [
//       { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//         greeting: 'Hi Sofia, what do you like the most about Java?'
//       },
//       { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//         greeting: 'Hi Lukas, what do you like the most about Python?'
//       },
//       { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//         greeting: 'Hi Madison, what do you like the most about Ruby?'
//       } 
//     ];



let list = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

//Dichiaro la funzione addProprieties
function addProprieties(array) {
    //Utilizzo il metodo .forEach() per ciclarmi gli n-elementi dell'array
    array.forEach((element) => {
        //Aggiungo la propietà greeting agli elementi dell'array
        element.greeting = `Hi ${element.firstName},what do you like the most about ${element.language}`;
    })
}

//Richiamo la funzione
addProprieties(list);
console.log(list);