const eventos = data.events;
let eventsCard = [];

function crearEvents() {
  for (let event of eventos) {
    let cardEventos = `<div class="card">
    <img src="${event.image}" alt="Cinema">
    <h3>${event.name}</h3>
    <h4>${event.description}</h4>
        <p>Price: $${event.price}</p>
        <a href="./details.html"><h4 class="rectangulo">See more</h4></a>
    </div>`
    eventsCard.push(cardEventos)
  }
}
function printEvents() {
  let cardEventos = document.getElementById('boxCard');
  cardEventos.innerHTML = eventsCard.join('')
}


crearEvents();
printEvents();