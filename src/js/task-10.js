function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let arrayOfElements = [];

  for (let index = 0; index < amount; index++) {
    const element = document.createComment("div");
    arrayOfElements.push(element);
    console.log(element);
  }
  console.log(arrayOfElements);
  return arrayOfElements;
}

createBoxes(2);
