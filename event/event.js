const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.getElementById("task");

// creo un ascoltatore di eventi sul mio form, specificando l' evento submit,
// in modo da evitare il ricaricamento della pagina e usufruire ugualmente delle
// validazioni offerte dal form

const getTask = function (e) {
  e.preventDefault();
  const task = input.value;
  console.log(task);
  printTask(task);
  //   come ultima riga potresti resettare l input
  input.value = "";
};

const printTask = function (task) {
  const li = document.createElement("li"); // è come se stessi creando un li in html
  li.innerText = task; //sto riempiendo l li con il task
  ul.appendChild(li); // sto annidando l' li nel suo ul
};

form.addEventListener("submit", (e) => {
  getTask(e);
});
