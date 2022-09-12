function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const parrentBoxRef = document.querySelector("#boxes");
const amountBoxesRef = document.querySelector('[type="number"]');
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", removeBoxes);

function createBoxes(number) {
  number = amountBoxesRef.value;

  let size = 30;
  if (!number) {
    alert("Choose amount");
  } else {
    for (let index = 0; index < number; index++) {
      const box = document.createElement("div");
      box.style.width = `${size + index * 10}px`;
      box.style.height = `${size + index * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginBottom = `${10}px`;
      parrentBoxRef.appendChild(box);
    }
  }
}

function removeBoxes() {
  amountBoxesRef.value = 1;
  parrentBoxRef.innerHTML = "";
}
