import { validForm } from "./validateLogin.js";
import { displayErrorForm } from "../displayErrorForm.js";

{
  /* Observe les données insérées dans le formulaire de connexion pour lancer une vérification si l'utilisateur existe */
}

console.log("Email: sophie.bluel@test.tld");
console.log("Password: S0phie");

const user = {
  email: "",
  password: "",
};

const emailInput = document.querySelector("input[type='email']");
emailInput.addEventListener("input", function () {
  user.email = this.value;
});

const passwordInput = document.querySelector("input[type='password']");
passwordInput.addEventListener("input", function () {
  user.password = this.value;
});

const submitInput = document.querySelector("input[type='submit']");
submitInput.addEventListener("click", function (event) {
  event.preventDefault();

  // Si au moins un des champs est vide, on affiche une erreur 
  if (user.email === "" || user.password === "") {
    if (user.email === "" && user.password === "") {
      displayErrorForm("L'identifiant et mot de passe sont requis.");
    } else if (user.email === "") {
      displayErrorForm("L'identifiant est requis.");
    } else if (user.password === "") {
      displayErrorForm("Le mot de passe est requis.");
    }
  } 
  // Sinon on lance la vérification du formulaire
  else {
    validForm(user);
  }
});

export { user };
