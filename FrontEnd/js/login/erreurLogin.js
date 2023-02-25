{
  /* Création d'un paragraphe pour informer d'une erreur de connexion:
    <p>
      Erreur dans l’identifiant ou le mot de passe
    </p>
  */
}

const displayError = () => {
  const errorLogin = document.createElement("p");
  errorLogin.classList.add("erreur-info");

  errorLogin.textContent = "Erreur dans l’identifiant ou le mot de passe";

  // On place l'affichage de l'erreur de connexion au dessus du bouton de connexion
  const formLogin = document.querySelector("#login > form");
  const submitLogin = document.querySelector("input[type='submit']");
  formLogin.insertBefore(errorLogin, submitLogin);
};

export { displayError };