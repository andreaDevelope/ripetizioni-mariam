const form = document.querySelector("form");
const button = document.querySelector("button");

const preventDefault = (e) => {
  console.log("funziona event");
};

form.addEventListener("submit", (e) => {
  preventDefault(e);
});
