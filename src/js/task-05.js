const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

console.log(inputRef);
console.log(outputRef);

inputRef.addEventListener("input", (event) => {
  if (!event.currentTarget.value) {
    outputRef.textContent = "Anonymous";
  } else {
    outputRef.textContent = event.currentTarget.value;
  }
});
