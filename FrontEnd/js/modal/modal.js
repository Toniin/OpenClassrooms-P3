import { removeModal } from "./removeModal.js";

{
  /* Création de la modale lorsque l'on clique sur le bouton de modification :

    <div class="backgroundModal">
      <div class="modalEditor">
		  </div>
		</div>

  */
}

const modal = () => {
  // Affichage de la modale pour éditer les projets lorsque l'on clique sur le bouton de modification
  const btnEditWorks = document.getElementsByClassName("btnEditWorks")[0];
  btnEditWorks.addEventListener("click", (event) => {
    event.preventDefault();

    // Vérifier si l'arrière plan n'existe pas, on le créé
    if (document.getElementsByClassName("backgroundModal").length === 0) {
      const backgroundModal = document.createElement("div");
      backgroundModal.classList.add("backgroundModal");
      document.querySelector("body").appendChild(backgroundModal);

      // Création de la modale
      const modalEditor = document.createElement("div");
      modalEditor.classList.add("modalEditor");

      // Création d'un conteneur pour le contenu de la modale
      const modalEditorContainer = document.createElement("div");
      modalEditorContainer.classList.add("modalEditorContainer");
      modalEditor.appendChild(modalEditorContainer);

      // --- CONTENU DE LA MODALE --- //

      // Bouton pour supprimer la modale
      removeModal(backgroundModal, modalEditor);

      // Titre de la modale
      const modalTitle = document.createElement("h3");
      modalTitle.textContent = "Galerie photo";
      modalTitle.classList.add("modalTitle");
      modalEditorContainer.appendChild(modalTitle);

      // Créer un container pour les projets
      const worksContainer = document.createElement("div");
      worksContainer.classList.add("worksContainer");
      modalEditorContainer.appendChild(worksContainer);

      // Récupérer les projets (works) pour les afficher
      fetch("http://localhost:5678/api/works")
        .then((res) => res.json())
        .then((data) =>
          data.forEach((work) => {
            const img = document.createElement("img");
            img.classList.add("imgWorks");
            img.setAttribute("src", work.imageUrl);
            img.setAttribute("alt", work.title);
            worksContainer.appendChild(img);
            // CREER DES BOUTONS ICI
          })
        );

      // Barre de séparation
      const separationBar = document.createElement("hr")
      modalEditorContainer.appendChild(separationBar)

      // Bouton pour ajouter une photo
      const btnAddPicture = document.createElement("button")
      btnAddPicture.classList.add("btnAddPicture")
      btnAddPicture.textContent = "Ajouter une photo"
      modalEditorContainer.appendChild(btnAddPicture)

      // Bouton pour supprimer la galerie
      const btnRemoveGallery = document.createElement("p")
      btnRemoveGallery.classList.add("btnRemoveGallery")
      btnRemoveGallery.textContent = "Supprimer la galerie"
      modalEditorContainer.appendChild(btnRemoveGallery)

      backgroundModal.appendChild(modalEditor);
    }
  });
};

export { modal };
