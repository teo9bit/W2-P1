/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
// let n1 = 15
// let n2 = 25

// if (n1>n2) {
//   console.log(n1);
// } else if (n2>n1){
//   console.log(n1);
// } else console.log("n1 = n2");
//   console.log(n2); 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

// let n = 4

// if (n!==5) {
//   console.log('not equal');  
// } else console.log(equal);
  

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
// var x = 25
// if (n % 5 === 0) {
//   console.log();
// 


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

// let n1 = 5; let n2 = 8;
// if (n1 === 8 || n2 === 8) {
//   console.log('uno dei due numeri è 8');
// } else if (n1 + n2 === 8) {
//   console.log('la loro somma è uguale a 8');
// } else if (n1 - n2 === 8 || n2 - n1 === 8) {
//   console.log('la loro sottrazione è uguale a 8');
// }


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce.
  Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

// let totalShoppingCart = 40

// if (totalShoppingCart < 50) {
//   console.log(totalShoppingCart) 
// } else console.log('tot' + (totalShoppingCart + 10))

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

// let totalShoppingCart = 60

// if (totalShoppingCart > 50) {
//   console.log(totalShoppingCart * 0.8) 
// } else console.log('tot' + (totalShoppingCart * 0.8 + 10))

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

// let a = 11
// let b = 2
// let c = 5

// if (a > b && a > c) {
//   if (b > c) {
//     console.log(a +', ' +b+ ', '+c)
//   } else {
//     console.log(a +', ' +c+ ', '+b)
//   }
// } 
// if (b > a && b > c) {
//   if (b > c) {
//     console.log(b +', ' +a+ ', '+c)
//   } else {
//     console.log(b +', ' +c+ ', '+a)
//   }
// } 
// if (c > a && c > b) {
//   if (a > b) {
//     console.log(b +', ' +a+ ', '+c)
//   } else {
//     console.log(c +', ' +b+ ', '+a)
//   }
// }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

// let n = 3

// if (typeof n === "number") {
//   console.log('è un numero');
// } else {
//   console.log('non è un numero');
// }

// oppure

// let n = 4

// console.log(Number isInteger (n));

// oppure

// var x = 25
// if (n % 1 === 0) {
//   console.log('è un intero')
// } else console.log('non è un intero')


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

// var x = 25
// if (n % 2 === 0) {
//   console.log('è un numero pari')
// } else console.log('non è un numeero dispari')


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

let val = 7

if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
*/

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

// let n = 12

// if (n < 5) {
//   console.log('tiny')
// } else if (n < 10) {
//   console.log('small')
// } else if (n < 15) {
//   console.log('medium') 
// } else if (n < 20) {
//   console.log('large')
// } else if (n >= 20) {
//  console.log('huge')
// }

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

// isMale = true
// let gender = isMale ? 'male' : "female"
// console.log(gender)

// // oppure

// if (isMale=true) {
//   gender= 'male'  
// } else {
//   gender= 'female'  
// }
// console.log(gender)


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
