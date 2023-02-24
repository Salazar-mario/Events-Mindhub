console.log(data);

const eventos = data;

console.log(eventos);

let eventsCard=[];

function crearCard(){
  for (let event of eventos){
    let boxCard = `<div class="card">
    <img src="${event.image}" alt="Cinema">
    <h3>${event.name}</h3>
    <h4>${event.description}</h4>
        <p>${event.price}</p>
        <a href="./details.html"><h4 class="rectangulo">See more</h4></a>
    </div>`
    eventsCard.push(boxCard);
    }
  }
console.log(eventsCard);

function printEvents(){
  let  boxCard = document.getElementById('boxCard');
  boxCard.innerHTML = eventsCard.join('')
}

crearCard();
printEvents();