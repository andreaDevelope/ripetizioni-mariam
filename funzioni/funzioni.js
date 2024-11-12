// esempio funzione semplice

// 1 esempio di funzione con return
const somma = function () {
  return 3 + 2; // la funziona quando invocata ritornerà il risultato di 3 + 5
};

const risultatoSomma = somma(); // mi salvo il valore dato in output dalla funzione somma in una variabile

console.log(risultatoSomma);

// 2 esempio di funzione senza return

let risultato; // dichiaro la variabile risultato per assegnargli il risultato della funzione in un secondo momento

const sottrazione = function () {
  risultato = 10 - 6;
};

console.log(sottrazione()); //è undefined perchè la funzione non torna output inquesto caso si chiama funzione void
console.log(risultato); //vale 4 perchè la funzione è stata invocata nel conole.log sopra

// 3 esempio di parametri di funzioni

let number1 = 10;
let number2 = 20;

const fuParam = function (param1 = 0, param2 = 0) {
  return param1 + param2;
};

console.log(fuParam(20, 50));

console.log(fuParam(30, 200));

// esempio  sugli scope delle variabili

// *
// lo scope è da immaginare coe fosse una stanza separata, da fori non puoi accedere alle sue variabili
// ma da dentro puoi accedere a tutto quello che viene definito fuori
// *

{
  const nome = "Mariam";
  console.log(nome);
}

// console.log(nome); // non lo trova perchè è fuori dallo scope locale della variabile

// METODI DELLE STRINGHE

// slice()

const nome = "Mariam";

console.log(nome.slice(3)); // => iam

console.log(nome.slice(1, 4)); // => ari

console.log(nome.slice(-3, -1)); // => ia
