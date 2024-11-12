// esempio di if
let number = 9;

if (number > 20) {
  console.log("è maggiore di 20");
} else if (number > 10) {
  console.log("number è maggiore di 10 e minore di 20");
} else {
  console.log("number è minore di 10");
}

// esempio di switch
let switchEx = 50;
switch (switchEx) {
  case 10:
    console.log("number è 10");
    break;
  case 30:
    console.log("number è 30");
    break;
  case 50:
    console.log("number è ciao");
    break;
  default:
    console.log("number non è nessuno dei casi precedenti");
}

// ------------------------CICLI------------------------------------

// esempio di for

let array1 = [1, 2, 3];
let risultatoSomma = 0;

for (let i = 0; i < array1.length; i++) {
  risultatoSomma += array1[i];
}
console.log(risultatoSomma);

// esempio di while

let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}

//  esmpio do-while
console.log("------------------------------------------");
let o = 1;

do {
  console.log(o);
  o++;
} while (o < 9);
