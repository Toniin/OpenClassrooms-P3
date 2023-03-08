{
  /* Afficher un arrière plan au site lorsque la modale s'affiche */
}

const displayBackgroundModal = () => {
  // Vérifier si l'arrière plan n'existe pas, on le créé
  if (document.getElementsByClassName("backgroundModal").length === 0) {
    const backgroundModal = document.createElement("div");
    backgroundModal.classList.add("backgroundModal");
    document.querySelector("body").appendChild(backgroundModal);
  }
};

export { displayBackgroundModal };
