
// Es - 5 $2

// Dato un array di oggetti, creare una funzione che permetta di mostrare un messaggio di alert:

// - se logged=true: mostrare il messaggio “L’utente è stato registrato.”
// - se logged=false: mostrare il messaggio “L’utente non è registrato.”
//     let list = [
//         { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
//         { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
//         { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
//     ];
// - Utilizzare alert() → metodo che fa visualizzare una finestra di pop-up per mostrare un messaggio di avviso all’utente
//     alert('Messaggio di avviso per l'utente');

let list = [
            { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
            { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
            { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
        ];
       //Dichiaro la funzione popUp
        function popUp() {
            //ciclo l'array list con il .forEach() applicando l'If/Else subito dopo
            list.forEach(element => {
              if (element.logged === true) {
                alert(`L'utente è stato registrato`);
              } else if(element.logged === false) {
                alert(`L'utente non è stato registrato`);
              }  
            });
        }
        //Mostro in output tramite un alert "il Pop-Up di avviso"
        alert(`Messaggio di avviso per l'utente`);
        //Invoco la funzione 
        popUp();