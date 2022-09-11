const fontSizeControlRef = document.querySelector("#font-size-control");
const changingTextRef = document.querySelector("#text");

console.log(fontSizeControlRef);
console.log(changingTextRef);

changingTextRef.style.fontSize = `${fontSizeControlRef.value}px`;

fontSizeControlRef.addEventListener("change", () => {
  changingTextRef.style.fontSize = `${fontSizeControlRef.value}px`;
});
