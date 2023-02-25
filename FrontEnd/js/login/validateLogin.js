import { displayError } from "./erreurLogin.js";

{
  /* Vérifier la connexion à travers un POST vers la base de donnée pour voir si l'utilisateur existe */
}

const validForm = (body) => {
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // ? PROBLEME si on met pas JSON.stringify(), ça ne fonctionne pas même si on met la constante user en mode JSON ?
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Erreur dans l’identifiant ou le mot de passe");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      window.location.href = "http://127.0.0.1:5500/FrontEnd/";

      // Stocker le token pour vérifier la connexion de l'utilisateur
      localStorage.setItem('tokenSession', data.token);
    })
    .catch((error) => {
      console.error(error);

      if (!document.querySelector("p")) {
        displayError();
      }
    });
};

export { validForm };
