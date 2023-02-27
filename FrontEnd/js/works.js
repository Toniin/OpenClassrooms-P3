{
  /* 
    Création d'une figure pour afficher un projet:
      <figure>
        <img src=$ImageDuProjet alt=$TitreDuProjet>
        <figcaption>
          $TitreDuProjet
        </figcaption>
      </figure>
    Puis ajoute le projet (work) dans le tableau des projets (works)
  */
}

const works = [];

const createWork = (work) => {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  const url = work.imageUrl;
  const title = work.title;

  img.setAttribute("src", url);
  img.setAttribute("alt", title);

  figcaption.textContent = title;

  figure.appendChild(img);
  figure.appendChild(figcaption);
  document.querySelector(".gallery").appendChild(figure);
  works.push(work);
};

export { createWork, works };
