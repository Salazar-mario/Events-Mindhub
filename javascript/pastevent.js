async function pastEventos() {
    let urlApi = "https://mindhub-xj03.onrender.com/api/amazing?time=past";
    let fetchResponse = await fetch(urlApi);
    let response = await fetchResponse.json();
    let assistance = response.events;
let div = document.getElementById("boxpast")
div.innerHTML = ``
let oldEvents = assistance.filter(function (assistance) {
    return assistance.date <= response.currentDate
})
function crearpastEvent(datos, contenedor) {
    contenedor.innerHTML = ""
    let eventos = ""
    datos.forEach((element) => {
        eventos += `<div class="card">
    <img src="${element.image}" alt="Cinema">
    <h3>${element.name}</h3>
    <p>${element.description}</p>
        <p>Price: $${element.price}</p>
        <p>Assistance: ${element.assistance}</p>
        <a href="./details.html?id=${element.id}"><h4 class="rectangulo">See more</h4></a>
    </div>`
    })
    if (datos.length === 0)
        contenedor.innerHTML = defineNotCard();
    else
        contenedor.innerHTML = eventos;
}
crearpastEvent(oldEvents, div);
function defineNotCard() {
    return `<div class="card2">
<img src="img/no-image-available.webp" alt="NotFound">
<h3>NotFound</h3>
<h4>The event you are looking for was not found!</h4>
</div>`
}
defineNotCard();
let categoryConteiner = document.getElementById("checks")
let categoryPrincipal = document.getElementById("boxCheck")
let categorias = (Array.from(new Set(assistance.map(container => container.category))))
console.log(categorias)
function CreacionCheckbox(category, conteiner) {
    let checkboxs = ""
    category.forEach(element => {
        checkboxs += `<input type="checkbox" name="category" id="${element}" value="${element}" for="${element}">
    ${element}`
    })
    conteiner.innerHTML += checkboxs
}
CreacionCheckbox(categorias, categoryConteiner)
categoryPrincipal.addEventListener("change", () => {
    let filtradoCategoria = filter()
    console.log(filtradoCategoria)
    crearpastEvent(filtradoCategoria, div)
})
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
        return oldEvents;
    } else {
        return arrayFiltrado;
    }
}
let input = document.getElementById("input-texto")
input.addEventListener("input", () => {
    let filtradoPorBusqueda = filter()
    crearpastEvent(filtradoPorBusqueda, div)
})
function filterBusqueda(eventos, valueSearch) {
    return eventos.filter(event => (event.name).toLowerCase().includes(valueSearch.toLowerCase()))
}  
function filter() {
    let filtradoCategoria = filterCategoria(assistance, categorias)
    let filtradoBusqueda = filterBusqueda(filtradoCategoria, input.value)
    return filtradoBusqueda
}
}
pastEventos()