{
  /* Création du titre de la modale
      
    <h3 class="modalTitle"> $title </h3>
      
  */
}

const createModalTitle = (containerModal, title) => {
  const modalTitle = document.createElement("h3");
  modalTitle.textContent = title;
  modalTitle.classList.add("modalTitle");
  containerModal.appendChild(modalTitle);
};

export { createModalTitle };
