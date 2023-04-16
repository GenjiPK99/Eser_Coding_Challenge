
// Es - 7 $3

// Dato un array contenente i giorni della settimana creare una funzione che inserisca all’interno del div con id “openings” una lista non numerata con all’interno i giorni della settimana con gli orari delle aperture del negozio.


//     Lunedi : dalle 9.00 alle 18.00
//     Martedi : dalle 9.00 alle 18.00


//     let openingDays =[
//       {day : 'monday' , from : '9.00' , to : "18.00"},
//       {day : 'tuesday' , from : '9.00' , to : "18.00"},
//       {day : 'wednesday' , from : '9.00' , to : "18.00"},
//       {day : 'thursday' , from : '9.00' , to : "18.00"},
//       {day : 'saturday' , from : '9.00' , to : "18.00"},
//       {day : 'sunday' , from : '9.00' , to : "18.00"},
//     ]


//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         <div id="openings"></div>
    
//       <script src="./main.js"></script>
//     </body>
//     </html>

//Variabili ScopeGlobale
let ggWrapper = document.querySelector('#openings');

//Dichiaro la variabile ggSettNeg = object
let ggSettNeg = {
    //Da traccia mi recupero l'array openingDays
    openingDays : [
        {day : 'monday' , from : '9.00' , to : "18.00"},
        {day : 'tuesday' , from : '9.00' , to : "18.00"},
        {day : 'wednesday' , from : '9.00' , to : "18.00"},
        {day : 'thursday' , from : '9.00' , to : "18.00"},
        {day : 'saturday' , from : '9.00' , to : "18.00"},
        {day : 'sunday' , from : '9.00' , to : "18.00"},
    ],
    //Dichiaro la function ggSett
    ggSett: function(){
        //Utilizzo il metodo .forEach per ciclarmi l'array openingDays
        this.openingDays.forEach((el) => {
            //Creo l'elemento div
            let div = document.createElement('div');
            div.classList.add('col-12','my-3');
            //collego tramite il metodo degli oggetti .innerHTML al document
            div.innerHTML = `
            <div class="d-flex justify-content-center">
            <ul>
            <li>${el.day}</li>
            <li>${el.from}</li>
            <li>${el.to}</li>
            </ul>
            </div>
            `
            //"appendo" il "figlio" al documento html
            ggWrapper.appendChild(div);
        })
    }
}
//Invoco a partire dall'oggetto, la fuction gg 
ggSettNeg.ggSett();