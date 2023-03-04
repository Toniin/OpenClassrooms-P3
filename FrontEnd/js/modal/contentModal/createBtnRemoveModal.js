{
  /* Création du bouton qui supprime la modale lorsque l'on clique dessus :

    <button class="modalRemove">
      <i class="fa-solid fa-xmark"></i>
		</button>

  */
}

const createBtnRemoveModal = (backgroundModal, modal) => {
  // Icône pour supprimer la modale
  const modalRemove = document.createElement("button");
  const modalRemoveIcon = document.createElement("i");
  
  modalRemove.classList.add("modalRemove");
  modalRemoveIcon.classList.add("fa-solid");
  modalRemoveIcon.classList.add("fa-xmark");

  modalRemove.appendChild(modalRemoveIcon);
  modal.appendChild(modalRemove);

  // Supprime la modale lorsque l'on clique le bouton
  modalRemove.addEventListener("click", () => {
    backgroundModal.remove();
  });
};

export { createBtnRemoveModal };

