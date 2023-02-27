const events = data.events;
let div = document.getElementById("boxCard")
div.innerHTML = ``

function CreacionCard(datos, contenedor) {
  contenedor.innerHTML = ""
  let eventos = ""
  datos.forEach((date) => {
    eventos +=`<div class="card">
    <img src="${date.image}" alt="Cinema">
    <h3>${date.name}</h3>
    <h4>${date.description}</h4>
        <p>Price: $${date.price}</p>
        <a href="./details.html"><h4 class="rectangulo">See more</h4></a>
    </div>`
  })
    contenedor.innerHTML = eventos
}
CreacionCard(events, div);


let categoryConteiner = document.getElementById("checks")
let categoryPrincipal = document.getElementById("boxCheck")

let categorias = (Array.from(new Set(events.map(container => container.category))))

console.log(categorias)
//creacion de los checkbox
function CreacionCheckbox(category, conteiner) {
  let checkboxs = ""
  category.forEach(date => {
    checkboxs += `<input type="checkbox" name="category" id="${date}" value="${date}" for="${date}">
    ${date}</label>`
  })
  conteiner.innerHTML += checkboxs
}

CreacionCheckbox(categorias, categoryConteiner)
categoryPrincipal.addEventListener("change", () => {
  let filtradoCategoria = filter()
  console.log(filtradoCategoria)
  CreacionCard(filtradoCategoria, div)
})

//filtro de categoria
function filterCategoria(eventos) {
  let checked = (Array.from(document.querySelectorAll("input[type ='checkbox']:checked"))
    .map((date) => date.value));
  let arrayFiltrado = checked
    .map((value) =>
      eventos.filter((container) => {
        return container.category === value;
      })
    ).flat();
  if (checked.length == false) {
    return events;
  } else {
    return arrayFiltrado;
  }
}

let input = document.getElementById("input-texto")

input.addEventListener("input", () => {
  let filtradoBusqueda = filter()
  CreacionCard(filtradoBusqueda, div)
})

function filterBusqueda(eventos, valueSearch) {
  return eventos.filter(event => (event.name).toLowerCase().includes(valueSearch.toLowerCase()))
}

function filter() {
  let filtradoCategoria = filterCategoria(events, categorias)
  let filtradoBusqueda = filterBusqueda(filtradoCategoria, input.value)
  return filtradoBusqueda
}



  