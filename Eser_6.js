// Es - 6 $2

// Tramite una finestra di pop-up, catturare l’input dell’utente e mostrarlo all’interno di un paragrafo

// - Utilizzare prompt() → metodo che fa visualizzare una finestra di pop-up per far inserire un dato all’utente
//     let text = prompt('Come ti chiami?');
//     console.log(text);

//Mi dichiaro le variabili globali 
let Wrapper = document.querySelector('#paragraphWrapper');

//Chiedo all'utente il nome da prompt
let text = prompt('Come ti chiami?');

//Creo e importo nell'Html il paragrafo
let p = document.createElement('p');
p.innerHTML = `
<p>${text}</p>
`
//"appendo" il "figlio" al documento html
Wrapper.appendChild(p);