const ulCategoriesRef = document.querySelector("#categories");
const numberOfCategories = ulCategoriesRef.childElementCount;
console.log("Number of categories: ", numberOfCategories);

const categoriesListRef = ulCategoriesRef.children;
// console.log(categoriesListRef);

for (let index = 0; index < categoriesListRef.length; index++) {
  console.log(
    "Category: ",
    categoriesListRef[index].firstElementChild.textContent
  );
  console.log(
    "Elements: ",
    categoriesListRef[index].lastElementChild.childElementCount
  );
}
