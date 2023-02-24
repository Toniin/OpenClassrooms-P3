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

  // Afficher la navigation d'éditeur s'il y a un compte connecté
  // if (storage.getItem("TOKEN")) {
  // Afficher bouton de connexion
  // }