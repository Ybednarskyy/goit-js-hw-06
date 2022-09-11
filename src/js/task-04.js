let counterValue = 0;

const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

const valueRef = document.querySelector("#value");
console.log(valueRef.textContent);

btnDecrementRef.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

btnIncrementRef.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
