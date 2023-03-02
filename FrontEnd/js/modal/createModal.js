import { displayBackgroundModal } from "./displayBackgroundModal.js";
import { createBtnRemoveModal } from "./content/createBtnRemoveModal.js";
import { displayContentGalleryModal } from "./content/gallery/displayContentGalleryModal.js";
// import { displayContentAddPictureModal } from "./content/addPicture/displayContentAddPictureModal.js";

{
  /* Création de la modale lorsque l'on clique sur le bouton de modification :

    <div class="backgroundModal">
      <div class="modalEditor">
		  </div>
		</div>

  */
}

// Créer et afficher la modale pour éditer les projets lorsque l'on clique sur le bouton de modification
const createModal = () => {
  // Afficher l'arrère plan de la modale
  displayBackgroundModal();
  const backgroundModal = document.querySelector(".backgroundModal");

  // Créer la modale
  const modal = document.createElement("div");
  modal.classList.add("modal");
  backgroundModal.appendChild(modal);

  // Bouton pour supprimer la modale
  createBtnRemoveModal(backgroundModal, modal);

  // Créer un conteneur pour le contenu de la modale
  const containerModal = document.createElement("div");
  containerModal.classList.add("containerModal");
  modal.appendChild(containerModal);

  // Afficher le contenu de la gallerie photo
  displayContentGalleryModal(containerModal)

  // // Rediriger sur une modal pour ajouter un nouveau projet lorsque l'on clique sur le bouton d'ajout d'une photo
  // const btnAddPicture = document.querySelector(".btnAddPicture")
  // btnAddPicture.addEventListener("click", () => {
  //   const containerModal = document.querySelector(".containerModal")
  //   containerModal.innerHTML = ""
  //   displayContentAddPictureModal(containerModal, modal)
  // });
};

export { createModal };
