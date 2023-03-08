import { createBtnRemoveWork } from "./createBtnRemoveWork.js";

{
  /* Récupérer les projets et créer un article pour chaque projet :
      
    <article class="workInModal">
      <img src=$work.imageUrl alt=$work.title />
      <button class="btnMoveWorkInModal fa-solid fa-arrows-up-down-left-right"></button>
      <button class="btnRemoveWorkInModal fa-solid fa-trash-can"></button>
      <button class="btnEditWorkInModal">
        éditer
      </button>
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
        const btnMoveWorkInModalIcon = document.createElement("svg");

        btnMoveWorkInModal.classList.add("btnMoveWorkInModal");
        btnMoveWorkInModalIcon.classList.add("fa-solid");
        btnMoveWorkInModalIcon.classList.add("fa-arrows-up-down-left-right");
        btnMoveWorkInModal.appendChild(btnMoveWorkInModalIcon);
        workInModal.appendChild(btnMoveWorkInModal);

        // Bouton pour supprimer le projet
        createBtnRemoveWork(workInModal, work.id);

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
