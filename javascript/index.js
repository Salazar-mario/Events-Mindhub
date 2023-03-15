async function printEvents() {
  let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
  let fetchResponse = await fetch(urlApi);
  let response = await fetchResponse.json();
  let events = response.events;
  let div = document.getElementById("boxCard")
  div.innerHTML = ``

  function CreacionCard(datos, contenedor) {
    contenedor.innerHTML = ""
    let eventos = ""
    datos.forEach((date) => {
      eventos += `<div class="card">
    <img src="${date.image}" alt="Cinema">
    <h3>${date.name}</h3>
    <h4>${date.description}</h4>
        <p>Price: $${date.price}</p>
        <a href="./details.html?id=${date.id}"><h4 class="rectangulo">See more</h4></a>
    </div>`
    })
    if (datos.length === 0)
      contenedor.innerHTML = defineNotCard();
    else
      contenedor.innerHTML = eventos;
  }
  CreacionCard(events, div);

  function defineNotCard() {
    return `<div class="card">
  <img src="img/no-image-available.webp" alt="NotFound">
  <h3>NotFound</h3>
  <h4>The event you are looking for was not found!</h4>
  </div>
		`
  }
  defineNotCard();

  let categoryConteiner = document.getElementById("checks")
  let categoryPrincipal = document.getElementById("boxCheck")

  let categorias = (Array.from(new Set(events.map(container => container.category))))

  console.log(categorias)
  //creacion de los checkbox
  function CreacionCheckbox(category, conteiner) {
    let checkboxs = ""
    category.forEach(date => {
      checkboxs += `<input type="checkbox" name="category" id="${date}" value="${date}" for="${date}">
    ${date}`
    })
    conteiner.innerHTML += checkboxs
  }


  CreacionCheckbox(categorias, categoryConteiner)
  categoryPrincipal.addEventListener("change", () => {
    let filtradoCategoria = filter()
    console.log(filtradoCategoria)
    CreacionCard(filtradoCategoria, div)
    defineNotCard()

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
      return events
    } else {
      return arrayFiltrado
    }
  }

  let input = document.getElementById("input-texto")

  input.addEventListener("input", () => {
    let filtradoBusqueda = filter()
    CreacionCard(filtradoBusqueda, div)
    defineNotCard()

  })

  function filterBusqueda(eventos, valueSearch) {
    return eventos.filter(event => (event.name).toLowerCase().includes(valueSearch.toLowerCase()))
  }

  function filter() {
    let filtradoCategoria = filterCategoria(events, categorias)
    let filtradoBusqueda = filterBusqueda(filtradoCategoria, input.value)
    return filtradoBusqueda
  }
}


printEvents()