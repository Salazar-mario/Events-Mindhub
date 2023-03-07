
const dataEvents = data.events
const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")

console.log(id)

const eventsId = dataEvents.find(element => element._id == id)


const details = document.getElementById("idContainer")

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
`