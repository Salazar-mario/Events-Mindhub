
const dataEvents = data.events
const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")

console.log(id)

const eventsId = dataEvents.find(element => element._id == id)


const details = document.getElementById("idContainer")

details.innerHTML = `<div class="card">
<img src="${eventsId.image}" alt="Cinema">
<h3>${eventsId.name}</h3>
<h4>${eventsId.description}</h4>
    <p>Price: $${eventsId.price}</p>
</div>`