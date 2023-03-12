const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")


async function printDetails() {
let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
let fetchResponse = await fetch(urlApi);
let response = await fetchResponse.json();
let eventsId = response.events.find(eventsId => eventsId.id === id)
let details = document.getElementById("idContainer")
details.innerHTML = ` <div class="card">
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
`}
printDetails()