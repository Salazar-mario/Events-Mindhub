/*async function upcomingEventos() {
    let urlApi = "https://mindhub-xj03.onrender.com/api/amazing?time=upcoming";
    let fetchResponse = await fetch(urlApi);
    let response = await fetchResponse.json();
    let events = response.events;
    let div = document.getElementById("boxupcoming");
    div.innerHTML = ``;
    let upcomingEvents = events.filter(function (events) {
        return events.date >= response.currentDate
    });
    function crearupComing(datos, contenedor) {
        contenedor.innerHTML = ""
        let eventos = ""
        datos.forEach((element) => {
            eventos += `<div class="card">
    <img src="${element.image}" alt="Cinema">
    <h3>${element.name}</h3>
    <p>${element.description}</p>
        <p>Price: $${element.price}</p>
        <a href="./details.html?id=${element._id}"><h4 class="rectangulo">See more</h4></a>
    </div>`
        })
        if (datos.length === 0)
            contenedor.innerHTML = defineNotCard();
        else
            contenedor.innerHTML = eventos;
    }
    crearupComing(upcomingEvents, div);
    function defineNotCard() {
        return `<div class="card2">
    <img src="img/no-image-available.webp" alt="NotFound">
    <h3>NotFound</h3>
    <p>The event you are looking for was not found!</p>
    </div>`
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
        crearupComing(filtradoCategoria, div)
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
}
upcomingEventos()*/
document.addEventListener("DOMContentLoaded", async () => {
    let urlApi = "https://mindhub-xj03.onrender.com/api/amazing?time=upcoming";
    let fetchResponse = await fetch(urlApi);
    let response = await fetchResponse.json();
    let events = response.events;
    let div = document.getElementById("boxupcoming");
    div.innerHTML = ``;
    let upcomingEvents = events.filter(function (event) {
        return event.date >= response.currentDate;
    });

    function crearupComing(datos, contenedor) {
        contenedor.innerHTML = "";
        let eventos = "";
        datos.forEach((element) => {
            eventos += `<div class="card">
                <img src="${element.image}" alt="Cinema">
                <h3>${element.name}</h3>
                <p>${element.description}</p>
                <p>Price: $${element.price}</p>
                <a href="./details.html?id=${element._id}"><h4 class="rectangulo">See more</h4></a>
            </div>`;
        });
        if (datos.length === 0) {
            contenedor.innerHTML = defineNotCard();
        } else {
            contenedor.innerHTML = eventos;
        }
    }

    function defineNotCard() {
        return `<div class="card2">
            <img src="img/no-image-available.webp" alt="NotFound">
            <h3>NotFound</h3>
            <p>The event you are looking for was not found!</p>
        </div>`;
    }

    crearupComing(upcomingEvents, div);

    let categoryConteiner = document.getElementById("checks");
    let categoryPrincipal = document.getElementById("boxCheck");
    let categorias = Array.from(new Set(events.map(container => container.category)));
    console.log(categorias);

    // Creación de los checkbox
    function CreacionCheckbox(category, conteiner) {
        let checkboxs = "";
        category.forEach(date => {
            checkboxs += `<input type="checkbox" name="category" id="${date}" value="${date}">
                <label for="${date}">${date}</label>`;
        });
        conteiner.innerHTML += checkboxs;
    }

    CreacionCheckbox(categorias, categoryConteiner);

    categoryPrincipal.addEventListener("change", () => {
        let filtradoCategoria = filter();
        console.log(filtradoCategoria);
        crearupComing(filtradoCategoria, div);
    });

    function filterCategoria(eventos) {
        let checked = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
            .map((date) => date.value);
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

    let input = document.getElementById("input-texto");
    input.addEventListener("input", () => {
        let filtradoPorBusqueda = filter();
        crearupComing(filtradoPorBusqueda, div);
    });

    function filterBusqueda(eventos, valueSearch) {
        return eventos.filter(event => (event.name).toLowerCase().includes(valueSearch.toLowerCase()));
    }

    function filter() {
        let filtradoCategoria = filterCategoria(events);
        let filtradoBusqueda = filterBusqueda(filtradoCategoria, input.value);
        return filtradoBusqueda;
    }
});
