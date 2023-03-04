import { createModalTitle } from "../createModalTitle.js";
import { displayWorksInModal } from "./displayWorksInModal.js";
import { displayContentAddPictureModal } from "../addPicture/displayContentAddPictureModal.js"

{
  /* Afficher le contenu de la modale galerie :

    createModalTitle()
    <div class="worksContainer">
      displayWorksInModal()
      <hr>
      <button class="btnAddPicture">
        Ajouter une photo
      </button>
      <button class="btnRemoveGallery">
        Supprimer la galerie
      </button>
    </div>

  */
}

const displayContentGalleryModal = (containerModal) => {
  // Créer un titre de la modale
  createModalTitle(containerModal, "Galerie photo");

  // Créer un conteneur pour afficher les projets
  const worksContainer = document.createElement("div");
  worksContainer.classList.add("worksContainer");
  containerModal.appendChild(worksContainer);

  // Afficher les projets dans la modale
  displayWorksInModal(worksContainer);

  // Création d'une barre de séparation
  const separationBar = document.createElement("hr");
  containerModal.appendChild(separationBar);

  // Bouton pour ajouter une photo
  const btnAddPicture = document.createElement("button");
  btnAddPicture.classList.add("btnAddPicture");
  btnAddPicture.textContent = "Ajouter une photo";
  // Rediriger sur une modal pour ajouter un nouveau projet lorsque l'on clique sur le bouton d'ajout d'une photo
  btnAddPicture.addEventListener("click", () => {
    const modal = document.querySelector(".modal")
    const containerModal = document.querySelector(".containerModal")
    containerModal.innerHTML = ""
    displayContentAddPictureModal(containerModal, modal)
  });
  containerModal.appendChild(btnAddPicture);

  // Bouton pour supprimer la galerie
  const btnRemoveGallery = document.createElement("button");
  btnRemoveGallery.classList.add("btnRemoveGallery");
  btnRemoveGallery.textContent = "Supprimer la galerie";
  containerModal.appendChild(btnRemoveGallery);
};

export { displayContentGalleryModal };
