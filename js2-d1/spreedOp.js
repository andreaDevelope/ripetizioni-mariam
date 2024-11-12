// -----------------------------SPREED OPERATOR---------------------------------

// se assegno ad una variabile x il valore della variabile y, essendo il valore PRIMITIVO,
// le modifiche su una variabile non si rispecchiano sulla seconda
let number = 10;

const number2 = number;

console.log(number2);

number = 20;

console.log(number2);

// esempio con strutture di dato complesse
// tipo array e oggetti

let arr = [1, 2];

let arr2 = arr;

console.log(arr2); // assegno ad arr2 il valore di arr

arr[0] = 100; // modifico il primo valore di arr
console.log(arr2); //scopro che si è modificato anche arr2

// QUESTO SUCCEDE PERCHè DENTRO LE VARIBAILI CHE CONTENGONO OGGETTI E ARRAY QUINDI DATI NON PRIMITIVI,
// NON SI TROVA DIRETTAMENTE IL DATO MA IL RIFERIMENTO ALLA CELLA DI MEMORIA IN CUI JS LO COLLOCA
// PER EVITARE QUESTO COMPORTAMENTO DI DEFAULT MIRATO AD RISPARMIAR MEMORIA SI DEVE CLONARE LA STRUTTURA
// DATI

// stesso esempio con l array clonato

let arrPrincipale = [10, 20];

let arrClonato = [...arrPrincipale]; // faccio un clone di arrPrincipale

console.log(arrClonato); //=>[10,20] stampo in console il clone

arrPrincipale[0] = 300; // modifico il primo elemento dell arrPrincipale

console.log(arrClonato); //=> [10,20] noto che l' arrClonato non ha subito modifiche indesiderate

// ----------------------REST PARAM-----------------

const arrParam = [];
const restParam = function (...param) {
  // in questo modo insersci un array di parametri indefiniti
  for (let i = 0; i < param.length; i++) {
    arrParam.push(param[i]);
  }
};

restParam(10, "ciao", true, [10, 20, 30], { nome: "Mariam" }); //qi definisci l array di parametri della funzione
console.log(arrParam); //=> [10, "ciao", true, [10, 20, 30], { nome: "Mariam" ]

// ------------------METODI DEGLI ARRAY--------------------

// QUI VEDIAMO 3 METODI DEGLI ARRAY MOLTO COMODI FOREACH, MAP, FILTER
// SONO METODI CHE CONTENGONO UN CICLO E SERVONO PER FARE TIPO DI OPERAZIONI DIVERSE

// -----------------------FOREACH------------

const arrFrutta = ["ananas", "apple", "strowbarry"];

// prima del foreach dovevi fare un for per cliclar eun array

for (let i = 0; i < arrFrutta.length; i++) {
  console.log(arrFrutta[i]);
}

// con l' arrivo del foreach si scrive cosi

arrFrutta.forEach((frutto) => {
  //frutto equivale al singolo frutto dell array arrFrutta
  console.log(frutto); //facio il console.log del singolo frutto ogni ciclo
});

// CONSIDERAZIONI:
// IL FOREACH PRENDE IL POSTO DEI CICLI FOR, NON RITORNA NULLA COME METODO

// ------------------------MAP---------------

// MAP è SIMILE AL FOREACH PER LA SINTASSI, PERò QUESTO METODO RITORNA UN NUOVO ARRAY
// CON STESSA LUNGHEZZA E NON MODIFICA L ORIGINALE

const arrNumber = [1, 2, 3];

const newArrNumber = arrNumber.map((number) => {
  return number * 2;
});

console.log(arrNumber); // => [1,2,3]  -> qui vediamo che l array principale non viene modificato
console.log(newArrNumber); //=> [2,4,6]

// --------------------FILTER--------------------------

// FILTER è SEMPRE SIMILE PER LA SINTASSI AI PRIMI 2 GIà VISTI
//CAMBIA NEL UTILIZZO, FILTER CREA UNA CONDIZIONE RISOLVIBILE IN BOOLEANO
// E DECIDE SE TORNARE O NO GLI ELEMNTI DELL ARRAY NEL NUOVO ARRAY
// ANCHE LUI NON MODIFICA L ARRAY DI PARTENZA

let stringArr = ["ciao", "salve", "buongiorno"];

const newStringArr = stringArr.filter((stringa) => {
  if (stringa === "ciao") {
    return false;
  } else {
    return true;
  }
});

console.log(stringArr); //=>["ciao", "salve", "buongiorno"] -> l' array originale non viene modificato
console.log(newStringArr); //=> ['salve', 'buongiorno']
