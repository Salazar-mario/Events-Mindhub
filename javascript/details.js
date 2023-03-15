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
<div class="imgs">
  <img src="${eventsId.image}"/>
</div>
<div class="details">
  <div class="center">
    <h1>${eventsId.name}</h1>
    <h2>${eventsId.description}</h2>
    <h3>Date: ${eventsId.date} - Place: ${eventsId.place}</h3>
    <h4>Capacity:${eventsId.capacity}</h4>
    <h4>Price: $${eventsId.price}</h4>
`;
document.getElementById("idContainer").innerHTML = card;
}
printDetails()