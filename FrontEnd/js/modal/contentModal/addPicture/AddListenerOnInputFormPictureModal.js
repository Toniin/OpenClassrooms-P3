import { displayErrorForm } from "../../../displayErrorForm.js";
import { PostValidFormPictureInDataBase } from "./PostValidFormPictureInDataBase.js";

const AddListenerOnInputFormPictureModal = (
  inputFileInAddPicture,
  inputTitleInAddPicture,
  inputCategoryInAddPicture,
  btnSubmitAddPicture,
  formAddPicture
) => {
  // Permet de réaliser le body pour la requête POST
  // newPicture{image, title, category}
  const newPicture = new FormData();

  let File = false;
  let Title = false;

  // Activer le bouton du formulaire lorsque tous les champs sont remplis
  const enableBtnSubmit = (File, Title) => {
    if (File && Title) {
      btnSubmitAddPicture.removeAttribute("disabled");
    } else {
      btnSubmitAddPicture.setAttribute("disabled", "");
    }
  };

  inputFileInAddPicture.addEventListener("change", function () {
    newPicture.append("image", inputFileInAddPicture.files[0]);

    if (this.value) {
      File = true;

      // AJOUTER L'IMAGE CHOISIE DANS LE DOM
      const containerFileInAddPicture = document.querySelector(
        ".containerFileInAddPicture"
      );
      containerFileInAddPicture.innerHTML = "";
      const image = document.createElement("img");
      image.setAttribute(
        "src",
        URL.createObjectURL(inputFileInAddPicture.files[0])
      );
      containerFileInAddPicture.appendChild(image);

      enableBtnSubmit(File, Title);
    } else {
      File = false;
      enableBtnSubmit(File, Title);
    }
  });

  inputTitleInAddPicture.addEventListener("input", function () {
    if (!newPicture.get("title")) {
      newPicture.append("title", this.value);
    } else {
      newPicture.delete("title");
      newPicture.append("title", this.value);
    }

    if (this.value) {
      Title = true;
      enableBtnSubmit(File, Title);
    } else {
      Title = false;
      enableBtnSubmit(File, Title);
    }
  });

  inputCategoryInAddPicture.addEventListener("change", function () {
    newPicture.append("category", this.value);
  });

  // const formulaire = document.querySelector(".formAddPicture")
  formAddPicture.addEventListener("submit", (event) => {
    event.preventDefault();

    // Ajouter la valeur de la première catégorie par défaut
    if (!newPicture.get("category")) {
      newPicture.append("category", inputCategoryInAddPicture.options[0].value);
    }

    // Lancer la vérification du formulaire
    PostValidFormPictureInDataBase(newPicture);
  });
};

export { AddListenerOnInputFormPictureModal };
