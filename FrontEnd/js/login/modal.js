{
  /* Création de la modale lorsque l'on clique sur le bouton de publication :

    <div class="backgroundModal">
      <div class="modalEditor">
		  </div>
		</div>

  */
}

const modal = () => {
  // Affichage de la modale pour éditer les projets lorsque l'on clique sur le bouton de publication
  const btnEditorPublish =
    document.getElementsByClassName("editorBar-button")[0];
  btnEditorPublish.addEventListener("click", (event) => {
    event.preventDefault();

    // Vérifier si l'arrière plan n'existe pas, on le créé
    if (document.getElementsByClassName("backgroundModal").length === 0) {
      const backgroundModal = document.createElement("div");
      backgroundModal.classList.add("backgroundModal");
      document.querySelector("body").appendChild(backgroundModal);

      // Création de la modale
      const modalEditor = document.createElement("div");
      modalEditor.classList.add("modalEditor");

      // AJOUT DU CONTENU DE LA MODALE

      // Icône de pour supprimer la modale
      // UTILISER UN ICONE FONT AWESOME
      const modalDelete = document.createElement("p");
      modalDelete.textContent = "X";
      modalDelete.classList.add("modalDelete");
      modalEditor.appendChild(modalDelete);

      // Titre de la modale
      const modalTitle = document.createElement("h3");
      modalTitle.textContent = "Galerie photo";
      modalTitle.classList.add("modalTitle");
      modalEditor.appendChild(modalTitle);

      // Créer un container pour les projets
      const worksContainer = document.createElement("div")
      worksContainer.classList.add("worksContainer")
      modalEditor.appendChild(worksContainer)
      
      // Récupérer les projets (works) pour les afficher
      fetch("http://localhost:5678/api/works")
        .then((res) => res.json())
        .then((data) =>
          data.forEach((work) => {
            const img = document.createElement("img");
            img.classList.add("imgWorks")
            img.setAttribute("src", work.imageUrl);
            img.setAttribute("alt", work.title);
            worksContainer.appendChild(img)
            // CREER DES BOUTONS ICI
          })
        );

      backgroundModal.appendChild(modalEditor);

      // -------------------------------------------------------------------------
      // -- Suppression de la modale lorsque l'on clique en dehors de la modale --
      // -------------------------------------------------------------------------
      let removeModal = true;

      // Si on clique sur la modale, on ne la supprime pas
      modalEditor.addEventListener("mousedown", (event) => {
        removeModal = false;
      });

      // Si on clique sur la modale, on la supprime
      modalEditor.addEventListener("mouseout", (event) => {
        removeModal = true;
      });

      backgroundModal.addEventListener("click", () => {
        if (removeModal === true) {
          backgroundModal.remove();
        }
      });
    } else {
      // Suppression de la modale pour éditer les projets lorsque l'on clique sur le bouton de publication
      document.getElementsByClassName("backgroundModal")[0].remove();
    }
  });
};

export { modal };
