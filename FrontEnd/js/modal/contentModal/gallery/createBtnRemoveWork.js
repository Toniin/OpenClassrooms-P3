import { displayWorksInModal } from "./displayWorksInModal.js";
import { displayWorks } from "../../../displayWorks.js";

const createBtnRemoveWork = (workInModal, idWork) => {
  const btnRemoveWorkInModal = document.createElement("button");
  const btnRemoveWorkIcon = document.createElement("svg");

  btnRemoveWorkInModal.classList.add("btnRemoveWorkInModal");
  btnRemoveWorkIcon.classList.add("fa-solid");
  btnRemoveWorkIcon.classList.add("fa-trash-can");
  btnRemoveWorkInModal.appendChild(btnRemoveWorkIcon);
  workInModal.appendChild(btnRemoveWorkInModal);

  btnRemoveWorkInModal.addEventListener("click", (event) => {
    event.preventDefault();

    fetch(`http://localhost:5678/api/works/${idWork}`, {
      method: "DELETE",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${localStorage.tokenSession}`,
      },
    }).then(() => {
      // Retour par défaut au bouton "Tous" qui est désactivé
      const filters = document.querySelectorAll(".filters button");
      filters.forEach((button) => {
        if (button.textContent === "Tous") {
          button.setAttribute("disabled", "");
        } else {
          button.removeAttribute("disabled");
        }
      });

      // Actualiser la liste des projets dans la modale et dans la galerie
      const worksContainer = document.querySelector(".worksContainer");
      worksContainer.innerHTML = "";
      displayWorksInModal(worksContainer);
      const galleryOfWorks = document.querySelector(".gallery");
      galleryOfWorks.innerHTML = "";
      displayWorks();
    });
  });
};

export { createBtnRemoveWork };
