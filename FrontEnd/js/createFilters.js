import { works } from "./createWorks.js";
import { displayWorks } from "./displayWorks.js";
import { createWork } from "./createWorks.js";

{
  /* Création d'un bloc pour contenir les filtres :

    <form class="filters">
		</form>

  */
}

let portfolio = document.getElementById("portfolio");
let gallery = document.querySelector(".gallery");
const form = document.createElement("form");
form.classList.add("filters");
portfolio.insertBefore(form, gallery);

{
  /* Création d'un bouton pour filtrer les projets:
    <button>
      $NomDuFiltre
    </button>
  */
}

const createFilter = (nameFilter, idFilter) => {
  const btnFilter = document.createElement("button");
  btnFilter.setAttribute("value", idFilter);
  btnFilter.textContent = nameFilter;
  btnFilter.classList.add("filter-button");

  // Par défaut, désactiver le filtre "Tous"
  if (nameFilter === "Tous") {
    btnFilter.setAttribute("disabled", "");
  }

  document.querySelector(".filters").appendChild(btnFilter);

  btnFilter.addEventListener("click", (event) => {
    event.preventDefault();

    // Désactiver le bouton qui est cliqué
    const filters = document.querySelectorAll(".filters button");
    filters.forEach((button) => button.removeAttribute("disabled"));

    // Supprimer tous les projets du DOM
    const worksDOM = document.querySelectorAll(".gallery figure");
    worksDOM.forEach((figure) => figure.remove());

    // Filtrer les projets pour ne récupérer que ceux qui ont la même catégorie que le bouton cliqué
    const worksFiltered = works.filter((work) => work.category.id == btnFilter.value);
    // Supprimer les doublons des projets déjà filtrés
    const removeDuplicateWorksFiltered = [...new Map(worksFiltered.map((element) => [element.title, element]))];

    // Afficher tous les projets si on clique sur "Tous"
    // Sinon afficher les projets filtrés
    if (nameFilter === "Tous") {
      btnFilter.setAttribute("disabled", "");
      displayWorks();
    } else {
      btnFilter.setAttribute("disabled", "");
      removeDuplicateWorksFiltered.forEach((work) => createWork(work[1]));
    }
  });
};

export { createFilter };
