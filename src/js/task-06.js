const inputRef = document.querySelector("#validation-input");
// console.log(inputRef);

inputRef.addEventListener("blur", () => {
  const dataLengthRef = inputRef.getAttribute("data-length");

  if (inputRef.classList.contains("valid")) {
    inputRef.classList.remove("valid");
  }
  if (inputRef.classList.contains("invalid")) {
    inputRef.classList.remove("invalid");
  }

  if (inputRef.value.length < dataLengthRef) {
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.add("valid");
  }
});
