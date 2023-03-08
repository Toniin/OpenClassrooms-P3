import { displayWorks } from "../../../displayWorks.js";

function PostValidFormPictureInDataBase(newPicture) {
  fetch("http://localhost:5678/api/works", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.tokenSession}`,
    },
    body: newPicture,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur dans l’ajout de ce projet.");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      // Suppression de la modale lorsque la photo est ajouté en base de donnée
      const modal = document.querySelector(".backgroundModal");
      modal.remove();

      // Actualiser la liste des projets dans la galerie
      const galleryOfWorks = document.querySelector(".gallery");
      galleryOfWorks.innerHTML = "";
      displayWorks();
    })
    .catch((error) => {
      console.error(error);
    });
}

export { PostValidFormPictureInDataBase };
