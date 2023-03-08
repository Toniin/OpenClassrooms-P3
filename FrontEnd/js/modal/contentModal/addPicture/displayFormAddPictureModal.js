import { AddListenerOnInputFormPictureModal } from "./AddListenerOnInputFormPictureModal.js";

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

  // Créer un input file pour insérer une image
  const containerFileInAddPicture = document.createElement("div");
  containerFileInAddPicture.classList.add("containerFileInAddPicture")

  const iconFileInAddPicture = document.createElement("i");
  iconFileInAddPicture.classList.add("fa-regular")
  iconFileInAddPicture.classList.add("fa-image")

  const inputFileInAddPicture = document.createElement("input");
  inputFileInAddPicture.setAttribute("type", "file");
  inputFileInAddPicture.setAttribute("id", "inputFile");

  const labelInputFileInAddPicture = document.createElement("label");
  labelInputFileInAddPicture.setAttribute("for", "inputFile");
  labelInputFileInAddPicture.textContent = "+ Ajouter photo"
  labelInputFileInAddPicture.classList.add("labelInputFile")

  const textFileInAddPicture = document.createElement("p");
  textFileInAddPicture.textContent = "jpg, png : 4mo max"

  // Créer un input text pour insérer le titre
  const labelTitleInAddPicture = document.createElement("label");
  labelTitleInAddPicture.textContent = "Titre";
  const inputTitleInAddPicture = document.createElement("input");
  inputTitleInAddPicture.setAttribute("type", "text");

  const labelCategoryInAddPicture = document.createElement("label");
  labelCategoryInAddPicture.textContent = "Catégorie";
  labelCategoryInAddPicture.setAttribute("for", "categories");

  // Créer un selecteur pour les différentes catégories
  const inputCategoryInAddPicture = document.createElement("select");
  inputCategoryInAddPicture.setAttribute("name", "categories");
  fetch("http://localhost:5678/api/categories")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        const optionCategoryInAddPicture = document.createElement("option");
        optionCategoryInAddPicture.textContent = element.name;
        optionCategoryInAddPicture.setAttribute("value", element.id);
        inputCategoryInAddPicture.appendChild(optionCategoryInAddPicture);
      });
    });

  // Créer d'une barre de séparation
  const separationBar = document.createElement("hr");

  // Bouton pour valider l'ajout de la photo
  const btnSubmitAddPicture = document.createElement("button");
  btnSubmitAddPicture.classList.add("btnSubmitAddPicture");
  btnSubmitAddPicture.setAttribute("disabled", "");
  btnSubmitAddPicture.textContent = "Valider";

  // Envoyer la nouvelle photo dans la base de donnée lorsque l'on clique sur le bouton valider
  AddListenerOnInputFormPictureModal(
    inputFileInAddPicture,
    inputTitleInAddPicture,
    inputCategoryInAddPicture,
    btnSubmitAddPicture,
    formAddPicture
  );

  containerFileInAddPicture.appendChild(iconFileInAddPicture);
  containerFileInAddPicture.appendChild(labelInputFileInAddPicture);
  containerFileInAddPicture.appendChild(inputFileInAddPicture);
  containerFileInAddPicture.appendChild(textFileInAddPicture);
  formAddPicture.appendChild(containerFileInAddPicture);

  formAddPicture.appendChild(labelTitleInAddPicture);
  formAddPicture.appendChild(inputTitleInAddPicture);
  formAddPicture.appendChild(labelCategoryInAddPicture);
  formAddPicture.appendChild(inputCategoryInAddPicture);
  formAddPicture.appendChild(separationBar);
  formAddPicture.appendChild(btnSubmitAddPicture);
  worksContainer.appendChild(formAddPicture);
};

export { displayFormAddPictureModal };
