const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
const number = document.querySelector(".number");
let counter = 0;
function colorChange() {
  if (counter > 0) {
    number.className = "green number bbh-bartle-regular";
  }
  if (counter < 0) {
    number.className = "red number bbh-bartle-regular";
  }
  if (counter === 0) {
    number.className = "normal number bbh-bartle-regular";
  }
}
increase.addEventListener("click", () => {
  counter++;
  number.textContent = counter;
  colorChange();
});
decrease.addEventListener("click", () => {
  counter--;
  number.textContent = counter;
  colorChange();
});
reset.addEventListener("click", () => {
  counter = 0;
  number.textContent = counter;
  colorChange();
});
