let div = document.getElementById("boxupcoming");
let events = data.events;
div.innerHTML = ``;

let upcomingEvents = events.filter(function (events) {
    return events.date >= data.currentDate;
});


function crearupComing(datos, contenedor) {
    contenedor.innerHTML = ""
    let eventos = ""
    datos.forEach((element) => {
        eventos += `<div class="card">
    <img src="${element.image}" alt="Cinema">
    <h3>${element.name}</h3>
    <h4>${element.description}</h4>
        <p>Price: $${element.price}</p>
        <p>Estimate:${element.estimate}</p>
        <a href="./details.html?id=${element._id}"><h4 class="rectangulo">See more</h4></a>
    </div>`
    })
    contenedor.innerHTML = eventos
}


crearupComing(upcomingEvents, div);



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
    crearupComing(filtradoCategoria, div)
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
        return upcomingEvents;
    } else {
        return arrayFiltrado;
    }
}

let input = document.getElementById("input-texto")

input.addEventListener("input", () => {
    let filtradoPorBusqueda = filter()
    crearupComing(filtradoPorBusqueda, div)
})

function filterBusqueda(eventos, valueSearch) {
    return eventos.filter(event => (event.name).toLowerCase().includes(valueSearch.toLowerCase()))
}

function filter() {
    let filtradoCategoria = filterCategoria(events, categorias)
    let filtradoBusqueda = filterBusqueda(filtradoCategoria, input.value)
    return filtradoBusqueda
}