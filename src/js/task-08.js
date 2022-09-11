const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formElements = event.currentTarget.elements;

  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
  };
  console.log(formData);

  event.currentTarget.reset();
}
