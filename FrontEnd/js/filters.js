import { works } from "./works.js";

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

const createFilter = (filterName) => {
  const filter = document.createElement("button");
  filter.textContent = filterName;
  filter.classList.add("filter-button");
  // Par défaut, ajouter l'apparence du filtre activé au filtre "Tous"
  if (filterName === "Tous") {
    filter.classList.add("filter-active")
  }
  document.querySelector(".filters").appendChild(filter);

  filter.onclick = (event) => {
    event.preventDefault();

    // Retire la classe .filter-active au filtre qui le contient
    if (document.querySelector(".filter-active")) {
      document.querySelector(".filter-active").classList.remove("filter-active")
    }

    works.forEach((work) => {
      const worksDOM = document.querySelectorAll(".gallery > figure");

      // If: Nom du filtre = Tous ou Nom de la catégorie de l'élément => Affiche l'élément
      if (filterName === "Tous" || filterName === work.category.name) {
        worksDOM[work.id - 1].style.display = "block";
        // Ajoute la classe .filter-active
        filter.classList.add("filter-active");
      }
      // Else : Nom du filtre != Nom de la catégorie de l'élément => Cache l'élément
      else {
        worksDOM[work.id - 1].style.display = "none";
      }
    });
  };
};

export { createFilter };
