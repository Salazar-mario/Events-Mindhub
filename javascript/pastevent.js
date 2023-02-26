let events = data.events
let eventsCard = [];
let currentDate = data.currentDate;
let templates=[];


function crearpastEvent() {
    for (let element of events) {
        if(element.date<currentDate){
        let cardEventos = `<div class="card">
    <img src="${element.image}" alt="Cinema">
    <h3>${element.name}</h3>
    <h4>${element.description}</h4>
        <p>Price: $${element.price}</p>
        <a href="./details.html"><h4 class="rectangulo">See more</h4></a>
    </div>`
    eventsCard.push(cardEventos)
    }
}
}
function printEvents() {
    let cardEventos = document.getElementById('boxpast');
    cardEventos.innerHTML = eventsCard.join('')
}


crearpastEvent();
printEvents();
