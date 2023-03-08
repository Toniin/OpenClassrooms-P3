import { createWork } from "./createWorks.js";

const displayWorks = () => {
  // Importation des projets
  fetch("http://localhost:5678/api/works")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((work) => {
        createWork(work);
      })
    );
};

export { displayWorks };
