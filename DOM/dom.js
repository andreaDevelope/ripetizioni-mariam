// esempio di selettori del document

// -------------------------GET ELEMENT----------------------------

//----------------- GETELEMENTBYTAGNAME-----------------
// getElementByTagName ti consente di selezionare un elemento
// ma a differena del querySelector ritorna un HTMLCOLLECTION che poi per
// lavorare agevolmente andrà converitto in un array
const h1_2 = document.getElementsByTagName("h1");
console.log("getElementByTagsName ", h1_2);

//converto l HTMLCOLLECTION in un array e lo stampo in console
// per vedere la differenza di metodi disponibili
const h1_2Arr = Array.from(h1_2);
console.log("HTMLCOLLECTION convertita in array ", h1_2Arr);

//---------------------------- GETELEMENTBYID----------------------------
// il getElementById è il selettore consigliato per selezionare un elemento
// tramite il suo id, in quanto è il più performante messo a disposizione
const p = document.getElementById("parag");
console.log("getElementById ", p);

//----------------- GETELEMENTBYTCLASSNAME----------------
// GETELEMTSBYCLASSNAME
// getElemetsByClassName è simile al getElementsByTagName in quanto anche lui restituisce
// un HTMLCOLLECTION preferibilmente da convertire in array
const p_2 = document.getElementsByClassName("parag");
console.log("HTMLCOLLECTION GETELEMNTSBYCLASSNAME ", p_2);
const p_2Arr = Array.from(p_2);
console.log("convertito in array ", p_2Arr);

// -----------------------QUERY SELECTOR--------------------------------

//il query selector è un selettore potente e dispensioso, utilizza per selezionare
// gli elementi del DOM i selettori CSS anche avanzati e articolati
// torna quindi molto comodo e friendly

// UTILIZZO DEL QUERY SELECTOR PER SELEZIONARE UN ELEMENTO DAL TAG IN QUESTO CASO TORNERA
// IL PRIMO TAG SEGNALATO CHE TROVA IN HTML

const p_3 = document.querySelector("p");
console.log("querySelector per tag ", p_3);

// ---------------------QUERYSELECTORALL------------------------------------------
// il caso un cui vogliamo tutti i tag dell html possiamo usare querySelectorAll

// QUERYSELECTOR ALL RITORNA UNA NODE_LIST CHE PUR ESSENDO MIGLIORE RISPETTO
// HTMLCOLLECTION è SEMPRE COMODO CONVERTIRLA IN ARRAY
const p_4 = document.querySelectorAll("p");
console.log("querySeectorAll per tag ", p_4);
const p_4Arr = Array.from(p_4); //converto la nodeList in un array per comodità

// COME UTILIZZARE I SELETTORI AVANZATI DEL QUERYSELECTOR
const selettoreCss = document.querySelector("div > p + h3");
console.log(selettoreCss);
