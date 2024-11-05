// tipi di dati
//  number, string, array, object, undefined, null, NAN

// dati primitivi

// number
let number1 = 10;
let number2 = 7230;

console.log(number1 + number2); //addizione
console.log(number1 - number2); //sottrazione
console.log(number1 / number2); //divisione
console.log(number1 * number2); //moltiplicazione
console.log(number2 % 7 === 0); //resto %

// string
let string1 = "ciao Mariam";
let string2 = "ciao Andrea";
let string3 = "10";

console.log(string1 + " " + string2); //concatenazionedi stringhe
console.log(string1.length); // numero di caratteri di una stringa
console.log(string1 === string2); //ugualianza

console.log(number1 + string1); //concatenazione tra numeri e stringhe

console.log(string3 == number1); // confrontiamo '10' string e 10 number

let age = 30;
let age2 = 15;

if (age2 > 30) {
  console.log("sei troppo vecchio vai a casa nonno");
} else if (age2 > 18) {
  console.log("sei maggiorenne, puoi entare nel locale");
} else {
  console.log("sei ancora un bambino gioca con le figurine");
}

if (age === age2) {
  console.log(age, " è uguale a ", age2);
} else {
  console.log(age, " non è uguale a ", age2);
}

console.log(string1 - number1); //Not a Number

// strutture di dati complesse: ARRAY E OGGETTI

//ARRAY
let numbers = [35, 2, 3, 64, 5];
console.log(numbers[0]);

//come descriverei un oggetto complesso come una persona usando gli array, non in maniera ottimale
let mariamArray = ["mariam", "cognome", 18];

// oggetti
let mariamObj = {
  nome: "Mariam",
  lastname: "cognome",
  age: 18,
};

console.log(mariamObj.age);

if (mariamObj.age > 17) {
  console.log("mariam è maggiorenne");
  console.log(mariamObj.age * 2);
}

// esempio di oggetto innestato
let persons = [
  { nome: "mariam", eta: 18 },
  { nome: "andrea", eta: 32, skills: ["HTML", "CSS", "JS"] },
];

console.log(persons[1].skills[1]);

console.log(typeof number1); //è la keyword che ritorna il tipo di dato
