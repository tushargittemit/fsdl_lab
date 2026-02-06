const button = document.getElementById("btn");
const text = document.getElementById("text");

button.addEventListener("click", () => {
  text.innerText = "You clicked the button!";
  document.body.style.backgroundColor = "#d1e7dd";
});
