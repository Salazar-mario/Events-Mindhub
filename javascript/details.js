let queryString = location.search
let params = new URLSearchParams(queryString)
let id = params.get("id")
async function printDetails() {
  try {
  let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
  let fetchResponse = await fetch(urlApi);
  let response = await fetchResponse.json();
  let arrayEventos = response.events
  let eventsId = arrayEventos.find(eventsId => eventsId._id == id)
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
    <h2><span>Date</span>: ${eventsId.date}</h2>
    <h2><span>Place</span>: ${eventsId.place}</h2>
    <h2><span>Capacity</span>: ${eventsId.capacity}</h2>
    <h2><span>Price</span>: $${eventsId.price}</h2>
    </div>
`;
document.getElementById("idContainer").innerHTML = card;
}

printDetails()