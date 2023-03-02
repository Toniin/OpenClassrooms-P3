{
  /* Récupérer les projets et créer un article pour chaque projet:
      
    <article>
    </article>
      
  */
}
const displayWorksInModal = (worksContainer) => {
  // Récupérer les projets (works) pour les afficher
  fetch("http://localhost:5678/api/works")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((work) => {
        const workInModal = document.createElement("article");
        workInModal.classList.add("workInModal");

        // Image du projet
        const imgWorkInModal = document.createElement("img");
        imgWorkInModal.setAttribute("src", work.imageUrl);
        imgWorkInModal.setAttribute("alt", work.title);
        workInModal.appendChild(imgWorkInModal);

        // Bouton pour réorganiser le projet lorsque l'on se place sur l'image du projet
        const btnMoveWorkInModal = document.createElement("button");
        btnMoveWorkInModal.classList.add("btnMoveWorkInModal");
        btnMoveWorkInModal.classList.add("fa-solid");
        btnMoveWorkInModal.classList.add("fa-arrows-up-down-left-right");
        workInModal.appendChild(btnMoveWorkInModal);

        // Bouton pour supprimer le projet
        const btnRemoveWorkInModal = document.createElement("button");
        btnRemoveWorkInModal.classList.add("btnRemoveWorkInModal");
        btnRemoveWorkInModal.classList.add("fa-solid");
        btnRemoveWorkInModal.classList.add("fa-trash-can");
        workInModal.appendChild(btnRemoveWorkInModal);

        // Bouton pour éditer le projet
        const btnEditWorkInModal = document.createElement("button");
        btnEditWorkInModal.classList.add("btnEditWorkInModal");
        btnEditWorkInModal.textContent = "éditer";
        workInModal.appendChild(btnEditWorkInModal);

        worksContainer.appendChild(workInModal);
      })
    );
};

export { displayWorksInModal };
