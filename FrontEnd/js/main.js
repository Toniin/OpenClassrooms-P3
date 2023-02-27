import { createWork } from "./works.js";
import { createFilter } from "./filters.js";
import { editorBar } from "./login/editorBar.js";
import { logout } from "./login/logout.js";
import { modal } from "./login/modal.js";

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

// Ajouter des fonctions supplémentaires lorsque l'utilisateur est connecté
const tokenSession = localStorage.getItem("tokenSession");
if (tokenSession) {
  // Remplace "login" par "logout"
  // Permet de se déconnecter en cliquant dessus
  logout();

  // Afficher la barre d'édition avant le header
  editorBar();

  // Afficher la modale pour éditer les projets
  modal();
}
