import { displayErrorForm } from "../displayErrorForm.js";

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
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Erreur dans l’identifiant ou le mot de passe.");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      window.location.href = "http://127.0.0.1:5500/FrontEnd/";
      
      // Stocker le token pour vérifier la connexion de l'utilisateur
      localStorage.setItem("tokenSession", data.token);
    })
    .catch((error) => {
      console.error(error);
      displayErrorForm("Erreur dans l’identifiant ou le mot de passe");
    });
};

export { validForm };
