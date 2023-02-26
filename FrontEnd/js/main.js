import { createWork } from "./works.js";
import { createFilter } from "./filters.js";
// import { editorModeIcon } from "../assets/cssAdded/editiorIcon.svg";

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

  // Afficher le mode édition et le bouton de publication
  const infoEditorMode = document.createElement("div");
  const infoEditorModeIcon = document.createElement("p");
  const infoEditorModeText = document.createElement("p");
  const btnEditorPublish = document.createElement("button");

  infoEditorMode.classList.add("editorBar-info");
  btnEditorPublish.classList.add("editorBar-button");
  infoEditorModeIcon.textContent = "ICON";
  infoEditorModeText.textContent = "Mode édition";
  btnEditorPublish.textContent = "publier les changements";

  infoEditorMode.appendChild(infoEditorModeIcon);
  infoEditorMode.appendChild(infoEditorModeText);
  editorBar.appendChild(infoEditorMode);
  editorBar.appendChild(btnEditorPublish);

  // Affichage d'une modale pour éditer les projets
  btnEditorPublish.addEventListener("click", (event) => {
    event.preventDefault();

    // Vérifier si l'arrière plan n'existe pas, on le créé
    // Sinon on le supprime
    if (document.getElementsByClassName("backgroundModal").length === 0) {
      const backgroundModal = document.createElement("div");
      backgroundModal.classList.add("backgroundModal");
      document.querySelector("body").appendChild(backgroundModal);

      // Création de la modale
      const modalEditor = document.createElement("div");
      modalEditor.classList.add("modalEditor");
      backgroundModal.appendChild(modalEditor);
    } else {
      document.getElementsByClassName("backgroundModal")[0].remove();
    }
  });
}
