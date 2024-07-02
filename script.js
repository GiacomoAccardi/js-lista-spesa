/*
L'bboettivo di oggi è quello di creare una lista della spessa nella quale l'utente può inserire i prodotti.

1. creare un loop nella quale venga più volte chiesto (tramite prompt) all'utente di inserire qualcosa all'interno della lista
    >>creare la possibilità di uscire dal ciclo tramite l'inserimento della parola "stop" all'interno del prompt
2. aggiungere gli elementi inseriti sall'utente all'interno del DOM
-----------------------------------------------------------------------------
*/

//recupero la mia lista della spesa dal DOM

const lista = document.getElementById('lista-spesa')

//Creo un array vuoto
const array = [];

//creo una variabile che definisce il valore dell'elemento da inserire nella lista
let item;

//creo un ciclo while per raccogliere le informazioni che va in loop finchè non viene scritto "stop" 
while (item != 'stop') {

    //chiedo all'utente di inserire qualcosa nella lista
   item = prompt('Inserisci un elemento nella lista della spesa o scrivi "stop" per uscire.')

   //dischiaro una costante che mi permetta di inserire poi un elemento all'interno della lista nel DOM
   const li = document.createElement('li');
   
   //Definisco che l'elemento da inserire nella lista ha valore uguale a ciò che è stato inserito dall'utente
   li.innerText = item;
   
    //determino che se ciò che viene inserito dall'utente non è la parola 'stop' allora il nostro dato verrà inserito nell'array e successivamente anche nella lista presente nel DOM
   if (item != 'stop'){
    array.push(item)
    lista.append(li)
   }
   
} 