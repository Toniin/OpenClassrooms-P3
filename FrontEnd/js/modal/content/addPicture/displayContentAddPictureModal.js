import { createBtnReturnModal } from "../createBtnReturnModal.js";
import { createModalTitle } from "../createModalTitle.js";
import { displayFormAddPictureModal } from "./displayFormAddPictureModal.js";

const displayContentAddPictureModal = (containerModal, modal) => {
  // Créer un bouton pour retourner à la modale précédente
  createBtnReturnModal(modal);

  // Créer un titre pour la modale
  createModalTitle(containerModal, "Ajout photo");

  // Créer un conteneur pour afficher les projets
  const worksContainer = document.createElement("div");
  worksContainer.classList.add("worksContainer");
  containerModal.appendChild(worksContainer);

  // Afficher un formulaire pour ajouter une nouvelle photo
  displayFormAddPictureModal(worksContainer)

  // Création d'une barre de séparation
  const separationBar = document.createElement("hr");
  containerModal.appendChild(separationBar);

  // Bouton pour valider l'ajout de la photo
  const btnSubmitAddPicture = document.createElement("button");
  btnSubmitAddPicture.classList.add("btnSubmitAddPicture");
  btnSubmitAddPicture.textContent = "Valider";
  // Envoyer la nouvelle photo dans la base de donnée lorsque l'on clique sur le bouton valider
  btnSubmitAddPicture.addEventListener("click", () => {
    console.log("Photo validé!");
  });
  containerModal.appendChild(btnSubmitAddPicture);
};

export { displayContentAddPictureModal };
