let queryString = location.search
let params = new URLSearchParams(queryString)
let id = params.get("id")


async function printDetails() {
  try {
  let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
  let fetchResponse = await fetch(urlApi);
  let response = await fetchResponse.json();
  let arrayEventos = response.events
  let eventsId = arrayEventos.find(eventsId => eventsId.id === id)
  cardDetails(eventsId)
}catch (error) {
    console.log(error);
}
}
function cardDetails(eventsId){
  let card = ` <div class="card">
  <img src="${eventsId.image}"/>
<div class="descriptions">
    <h1>${eventsId.name}</h1>
    <p>${eventsId.description}</p>
    <h2>Date: ${eventsId.date}</h2>
    <h2>Place: ${eventsId.place}</h2>
    <h2>Capacity: ${eventsId.capacity}</h2>
    <h2>Price: $${eventsId.price}</h2>
    </div>
`;
document.getElementById("idContainer").innerHTML = card;
}
printDetails()