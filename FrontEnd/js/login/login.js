import { validForm } from "./validateLogin.js";

console.log("Email: sophie.bluel@test.tld");
console.log("Password: S0phie");

const user = {
  email: "",
  password: "",
};

const emailInput = document.querySelector("input[type='email']");
emailInput.addEventListener("input", function () {
  user.email = this.value
});

const passwordInput = document.querySelector("input[type='password']");
passwordInput.addEventListener("input", function () {
  user.password = this.value
});

const submitInput = document.querySelector("input[type='submit']");
submitInput.addEventListener("click", function (event) {
  event.preventDefault();

  validForm(user)
});
