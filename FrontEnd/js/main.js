import { createWork } from "./works.js";
import { createFilter } from "./filters.js";

// Importation des projets
fetch("http://localhost:5678/api/works")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((work) => {
      createWork(work);
    })
  );

// Importation des filtres
fetch("http://localhost:5678/api/categories")
  .then((res) => res.json())
  .then((data) => {
    data.length
      ? (createFilter("Tous"),
        data.forEach((element) => createFilter(element.name)))
      : false;
  });
