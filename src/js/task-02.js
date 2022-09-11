const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeItem = (value) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = value;
  itemEl.classList.add("item");

  return itemEl;
};

const ingredientsItems = ingredients.map(makeItem);
const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...ingredientsItems);
