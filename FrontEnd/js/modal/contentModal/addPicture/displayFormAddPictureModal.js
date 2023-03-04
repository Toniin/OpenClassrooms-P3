{
  /* Afficher le formulaire de la modale pour ajouter une photo :

    <form class="formAddPicture">
      <input type="file" />
      <label>Titre</label>
      <input type="text" />
      <label for="categories">Catégorie</label>
      <select name="categories">
        <option value="element.name">element.name</option>
      </select>
    </form>

  */
}

const displayFormAddPictureModal = (worksContainer) => {
  const formAddPicture = document.createElement("form");
  formAddPicture.classList.add("formAddPicture");

  const inputFileInAddPicture = document.createElement("input");
  inputFileInAddPicture.setAttribute("type", "file");

  const labelTitleInAddPicture = document.createElement("label");
  labelTitleInAddPicture.textContent = "Titre";
  
  const inputTitleInAddPicture = document.createElement("input");
  inputTitleInAddPicture.setAttribute("type", "text");
  
  const labelCategoryInAddPicture = document.createElement("label");
  labelCategoryInAddPicture.textContent = "Catégorie";
  labelCategoryInAddPicture.setAttribute("for", "categories");
  
  const inputCategoryInAddPicture = document.createElement("select");
  inputCategoryInAddPicture.setAttribute("name", "categories");

  fetch("http://localhost:5678/api/categories")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        const optionCategoryInAddPicture = document.createElement("option");
        optionCategoryInAddPicture.textContent = element.name;
        optionCategoryInAddPicture.setAttribute("value", element.name);
        inputCategoryInAddPicture.appendChild(optionCategoryInAddPicture);
      });
    });

  formAddPicture.appendChild(inputFileInAddPicture);
  formAddPicture.appendChild(labelTitleInAddPicture);
  formAddPicture.appendChild(inputTitleInAddPicture);
  formAddPicture.appendChild(labelCategoryInAddPicture);
  formAddPicture.appendChild(inputCategoryInAddPicture);
  worksContainer.appendChild(formAddPicture);
};

export { displayFormAddPictureModal };
