const submitButton = document.querySelector(".form-section__submit-button");
const emailInput = document.querySelector(".form-section__email-input");
const errorMessage = document.querySelector(".form-section__validation-error");

submitButton.addEventListener("click", (e) => {
  const email = emailInput.value;
  if (
    email == "null" ||
    email.startsWith("@") ||
    email.endsWith("@") ||
    !email.includes("@") ||
    !email.includes(".") ||
    email.startsWith(".") ||
    email.endsWith(".")
  ) {
    e.preventDefault();
    errorMessage.classList.remove("v-hidden");
    emailInput.style.backgroundImage = "url('./images/icon-error.svg')";
    emailInput.style.backgroundRepeat = "no-repeat";
    emailInput.style.backgroundPosition = "75% 50%";
  }
});

emailInput.addEventListener("keydown", () => {
  errorMessage.classList.add("v-hidden");
  emailInput.style.backgroundImage = "none";
});
