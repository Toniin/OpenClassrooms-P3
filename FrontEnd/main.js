// ----------------------- WORKS ----------------------- //

// <figure>
// 	<img src="data[X].imageUrl" alt="data[X].title">
// 	<figcaption>data[X].title</figcaption>
// </figure> 
const createFigure = (title, imgUrl) => {
  const figure = document.createElement("figure")
  figure.innerHTML = `
  <img src="${imgUrl}" alt="${title}">
  <figcaption>${title}</figcaption>`
  document.querySelector(".gallery").appendChild(figure)
}

// Importation des projets depuis la base de données
fetch('http://localhost:5678/api/works')
  .then(res => res.json())
  .then(data => data.forEach(element => createFigure(element.title, element.imageUrl)))


// ----------------------- FILTRE ----------------------- //

// <button> Nom_du_filtre </button> 
const createFilter = (name) => {
  const filter = document.createElement("button")
  filter.innerHTML = `${name}`
  document.querySelector(".filters").appendChild(filter)

  filter.onclick = () => {
    // FONCTION QUI REACTUALISE LES FIGURES POUR AVOIR UNIQUEMENT LES BONNES EN FONCTION DU FILTRE
    // UTLISER L'OBJET SET
    console.log(name)
    return false
  }
}

// Importation des filtres
fetch('http://localhost:5678/api/categories')
  .then(res => res.json())
  .then(data => {
    data.length >= 1 ? 
    ( createFilter("Tous"), 
    data.forEach(element => createFilter(element.name)) ) : false
  })

