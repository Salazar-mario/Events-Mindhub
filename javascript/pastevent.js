let div = document.getElementById("boxpast")
let assistance = data.events
div.innerHTML = ``


let oldEvents = assistance.filter(function (assistance) {
    return assistance.date <= data.currentDate
})

function crearpastEvent(datos, contenedor) {
    contenedor.innerHTML = ""
    let eventos = ""
    datos.forEach((element) => {
        eventos += `<div class="card">
    <img src="${element.image}" alt="Cinema">
    <h3>${element.name}</h3>
    <h4>${element.description}</h4>
        <p>Price: $${element.price}</p>
        <p>Assistance: ${element.assistance}</p>
        <a href="./details.html"><h4 class="rectangulo">See more</h4></a>
    </div>`
    })
    contenedor.innerHTML = eventos

}
crearpastEvent(oldEvents, div);

let categoryConteiner = document.getElementById("checks")
let categoryPrincipal = document.getElementById("boxCheck")

let categorias = (Array.from(new Set(assistance.map(container => container.category))))

console.log(categorias)
//creacion de los checkbox
function CreacionCheckbox(category, conteiner) {
    let checkboxs = ""
    category.forEach(element => {
        checkboxs += `<input type="checkbox" name="category" id="${element}" value="${element}" for="${element}">
    ${element}</label>`
    })
    conteiner.innerHTML += checkboxs
}

CreacionCheckbox(categorias, categoryConteiner)
categoryPrincipal.addEventListener("change", () => {
    let filtradoCategoria = filter()
    console.log(filtradoCategoria)
    crearpastEvent(filtradoCategoria, div)
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
    let filtradoCategoria = filterCategoria(events, categorias)
    let filtradoBusqueda = filterBusqueda(filtradoCategoria, input.value)
    return filtradoBusqueda
}
