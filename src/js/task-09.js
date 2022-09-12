function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector(".change-color");
const currentColorOutputRef = document.querySelector(".color");

changeColorBtnRef.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColorOutputRef.textContent = getRandomHexColor();
});
