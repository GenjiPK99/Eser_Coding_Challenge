// <!-- Es - 1 $1

// Dato un array di oggetti rappresentanti degli sviluppatori crea una funzione che calcoli e restituisca il numero di sviluppatori di Javascript provenienti dall’Europa

//      -->


let list = [
  { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]

//Dichiaro la Funzione: developerJS 
function developerJs(continent  , language) {
  // applico il metodo degli array .filter()
  let filtered= list.filter((element)=> element.continent == continent && element.language == language);
  return filtered;
}

//Richiamo la funzione 
console.log(developerJs('Europe','JavaScript'));
