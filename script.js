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

//creo un ciclo while per raccogliere le informazioni

let item;

while (item != 'stop') {
    
   item = prompt('Inserisci un elemento nella lista della spesa o scrivi "stop" per uscire.')

   if (item != 'stop'){
    array.push(item)
   } 

} 