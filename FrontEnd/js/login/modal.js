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
  const btnEditorPublish = document.getElementsByClassName("editorBar-button")[0]
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
