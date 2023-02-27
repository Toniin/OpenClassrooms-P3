{
  /* Création d'un paragraphe pour informer d'une erreur de connexion:
    <p>
      Erreur dans l’identifiant ou le mot de passe
    </p>
  */
}

const displayError = (textContent) => {
  // Si l'erreur est déjà affichée, on la supprime puis on la réaffiche
  if (document.getElementsByClassName("erreur-info")[0]) {
    document.getElementsByClassName("erreur-info")[0].remove();
    displayError(textContent);
  } 
  // Sinon on affiche l'erreur
  else {
    const errorLogin = document.createElement("p");
    errorLogin.classList.add("erreur-info");

    errorLogin.textContent = textContent;

    // On place l'affichage de l'erreur de connexion au dessus du bouton de connexion
    const formLogin = document.querySelector("#login > form");
    const submitLogin = document.querySelector("input[type='submit']");
    formLogin.insertBefore(errorLogin, submitLogin);
  }
};

export { displayError };
