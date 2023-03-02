{
  /* Création du bouton qui supprime la modale lorsque l'on clique dessus :

    <button class="backgroundModal">
      <i class="fa-solid fa-xmark modalRemove"></>
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

  // Supprime la modale lorsque l'on clique sur la croix
  modalRemove.addEventListener("click", () => {
    backgroundModal.remove();
  });
};

export { createBtnRemoveModal };

