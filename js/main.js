// salviamo in una variabile locale la funzione createApp, presa dalla variabile globale Vue
const { createApp } = Vue;

// inizializziamo un'istanza dell'applicazione Vue, invocando la funzione createApp
createApp({
    data(){
        return {
            // output legato all'h1 presente nel container del DOM
            message : 'Ciao CLASSE #97',
            immagine : 'https://rare-gallery.com/uploads/posts/1242413-homer-and-bender-cheers-to-beer.jpg'
        }
    }
}).mount('#container')