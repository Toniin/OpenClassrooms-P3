import { displayBackgroundModal } from "./displayBackgroundModal.js";
import { createBtnRemoveModal } from "./contentModal/createBtnRemoveModal.js";
import { displayContentGalleryModal } from "./contentModal/gallery/displayContentGalleryModal.js";

{
  /* Création de la modale lorsque l'on clique sur le bouton de modification :

    displayBackgroundModal()
    <div class="modal">
      createBtnRemoveModal()
      <div class="containerModal">
        displayContentGalleryModal()
	    </div>
	  </div>

  */
}

// Créer la modale lorsque l'on clique sur le bouton de modification
// Puis afficher la modale pour éditer les projets
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
  displayContentGalleryModal(containerModal);

  // Supprimer la modale lorsque l'on clique en dehors de la modale
  backgroundModal.addEventListener("click", (event) => {
    if (event.target === backgroundModal) {
      backgroundModal.remove()
    }
  });
};

export { createModal };
