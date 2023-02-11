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

fetch('http://localhost:5678/api/works')
  .then(res => res.json())
  .then(data => {
    for(const prop in data){
      createFigure(data[prop].title, data[prop].imageUrl)
    }
  })