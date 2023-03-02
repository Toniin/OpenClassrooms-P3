import { createWork } from "./works.js";
import { createFilter } from "./filters.js";
import { editorBar } from "./login/editorBar.js";
import { logout } from "./login/logout.js";
import { createModal } from "./modal/createModal.js";

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

  // Afficher un bouton pour modifier ses projets (works)
  const btnEditWorks = document.createElement("span");
  const btnEditWorksIcon = document.createElement("i");
  const btnEditWorksText = document.createElement("p");
  const worksTitle = document.querySelector("#portfolio > h2");

  btnEditWorks.classList.add("btnEditWorks");
  btnEditWorksText.textContent = "modifier";
  btnEditWorksIcon.classList.add("fa-regular");
  btnEditWorksIcon.classList.add("fa-pen-to-square");
  btnEditWorks.appendChild(btnEditWorksIcon);
  btnEditWorks.appendChild(btnEditWorksText);
  worksTitle.appendChild(btnEditWorks);

  // Créer et afficher la modale pour éditer les projets lorsque l'on clique sur le bouton de modification
  btnEditWorks.addEventListener("click", (event) => {
    event.preventDefault();
    createModal();
  });
}
