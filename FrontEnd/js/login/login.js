import { validForm } from "./validateLogin.js";

const user = {
  email: "", // sophie.bluel@test.tld
  password: "", // S0phie
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

// Stocker le token pour vérifier la connexion de l'utilisateur
// storage.setItem("TOKEN", "VALEUR TOKEN")
