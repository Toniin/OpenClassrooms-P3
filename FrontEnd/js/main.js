import { createWork } from "./works.js";
import { createFilter } from "./filters.js";

// Importation des projets
fetch("http://localhost:5678/api/works")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((work) => {
      createWork(work);
    })
  );

// Importation des filtres
fetch("http://localhost:5678/api/categories")
  .then((res) => res.json())
  .then((data) => {
    data.length
      ? (createFilter("Tous"),
        data.forEach((element) => createFilter(element.name)))
      : false;
  });

// Ajouter les fonctions lorsque l'utilisateur est connecté
const tokenSession = localStorage.getItem("tokenSession");
if (tokenSession) {
  console.log(tokenSession);

  // Afficher "logout" sur le bouton de connexion
  const btnLogin = document.querySelector("a[href='./login/']");
  btnLogin.textContent = "logout";
  btnLogin.setAttribute("href", "#");

  // Se déconnecter quand on clique sur le bouton
  btnLogin.addEventListener("click", () => {
    localStorage.removeItem("tokenSession");
    window.location.reload();
  });

  // Afficher la barre d'édition avant le header
  const editorBar = document.createElement("div");
  editorBar.classList.add("editorBar");
  const header = document.querySelector("header");
  document.querySelector("body").insertBefore(editorBar, header);
}
