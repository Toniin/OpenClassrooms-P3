import { displayContentGalleryModal } from "./gallery/displayContentGalleryModal.js";

const createBtnReturnModal = (modal) => {
  // Icône pour retourner à la modale précédente
  const modalReturn = document.createElement("button");
  const modalReturnIcon = document.createElement("i");
  modalReturn.classList.add("modalReturn");
  modalReturnIcon.classList.add("fa-solid");
  modalReturnIcon.classList.add("fa-arrow-left");
  modalReturn.appendChild(modalReturnIcon);

  modalReturn.addEventListener("click", () => {
    const containerModal = document.querySelector(".containerModal")
    containerModal.innerHTML = ""
    modalReturn.remove()
    displayContentGalleryModal(containerModal)
  });

  modal.appendChild(modalReturn);
}

export { createBtnReturnModal }