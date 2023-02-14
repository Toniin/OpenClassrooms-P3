// ----------------------- WORKS ----------------------- //
const works = new Set();

const createFigure = (title, imgUrl) => {
  const figure = document.createElement("figure");
  figure.innerHTML = `
  <img src="${imgUrl}" alt="${title}">
  <figcaption>${title}</figcaption>`;
  document.querySelector(".gallery").appendChild(figure);
};

// Importation des projets depuis la base de données
fetch("http://localhost:5678/api/works")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      works.add(element);
      createFigure(element.title, element.imageUrl);
    })
  );

// ----------------------- FILTRE ----------------------- //
const createFilter = (filterName) => {
  const filter = document.createElement("button");
  filter.innerHTML= `${filterName}`;
  // filter.style.width = "auto"
  // filter.style.backgroundColor = '#1D6154'
  // filter.style.

  // text-align: left;
	// margin-top:30px;
	// display: flex;
	// flex-direction: column;
  // font-family: 'Syne';
	// font-weight: 700;
	// color: white;
	
	// margin : 2em auto ;
	// width: 180px;
	// text-align: center;
	// border-radius: 60px ;

// background-color: #1D6154;
  
  document.querySelector(".filters").appendChild(filter);

  // If: Tous => Afficher tous les éléments
  // Else if: Nom du filtre = Nom de la catégorie de l'élément => Affiche l'élément
  // Sinon : Nom du filtre != Nom de la catégorie de l'élément => Cache l'élément
  filter.onclick = () => {
    works.forEach((work) => {
      const worksData = new Set([...works]);
      const worksDOM = document.querySelectorAll(".gallery > figure");

      if (filterName === "Tous") {
        worksDOM[work.id - 1].style.display = "";
      } else if (filterName === work.category.name) {
        worksDOM[work.id - 1].style.display = "";
      } else {
        worksDOM[work.id - 1].style.display = "none";
      }
    });

    return false;
  };
};

// Importation des filtres
fetch("http://localhost:5678/api/categories")
  .then((res) => res.json())
  .then((data) => {
    data.length >= 1
      ? (createFilter("Tous"),
        data.forEach((element) => createFilter(element.name)))
      : false;
  });
