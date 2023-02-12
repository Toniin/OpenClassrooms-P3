// Boucle qui créer:
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