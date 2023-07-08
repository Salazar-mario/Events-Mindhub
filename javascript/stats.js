async function createTable() {
    try {
        let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let pastEventArray = [];
        for (let event of response.events) {
            if (event.date < response.currentDate) {
                pastEventArray.push(event);
            }
        }
        pastEventArray.sort((a, b) => b.capacity - a.capacity);
        document.getElementById("MaxEventCapacity").innerHTML = `${pastEventArray[0].name}`;
        let maxCapacity = document.getElementById("MaxCapacity");
        maxCapacity.innerHTML = `${pastEventArray[0].capacity}`
        pastEventArray.sort((a, b) => ((b.assistance * 100) / b.capacity) - ((a.assistance * 100) / a.capacity));
        document.getElementById("MaxEventAssistance").innerHTML = `${pastEventArray[0].name}`;
        document.getElementById("MaxAssistance").innerHTML = `${Number(pastEventArray[0].assistance / pastEventArray[0].capacity * 100).toFixed(2)}%`;
        document.getElementById("MinEventAssistance").innerHTML = `${pastEventArray[pastEventArray.length - 1].name}`;
        document.getElementById("MinAssistance").innerHTML = `${Number(pastEventArray[pastEventArray.length - 1].assistance / pastEventArray[pastEventArray.length - 1].capacity * 100).toFixed(2)}%`;
        let categoryPastArray = [];
        let categoryPastArrayFilter = [];
        let categoryPastArrayInnerHtml = [];
        pastEventArray.forEach(event => {
            let asistencia = "";
            let capacidad = "";
            let precio = "";
            let ganancia = "";
            let porcentajeAsistencia = "";
            let obj_acc = {};
            if (!categoryPastArray.includes(event.category)) {
                categoryPastArray.push(event.category);
                categoryPastArrayFilter = pastEventArray.filter(e => e.category == event.category)
                categoryPastArrayFilter.reduce((acc, current) => {
                    asistencia = current.assistance;
                    precio = current.price;
                    ganancia = asistencia * precio;
                    capacidad = current.capacity;
                    obj_acc = {
                        totalGanancia: acc.totalGanancia + ganancia,
                        totalCapacidad: acc.totalCapacidad + capacidad,
                        totalAsistencia: acc.totalAsistencia + asistencia
                    }
                    return obj_acc;
                }, { totalGanancia: 0, totalCapacidad: 0, totalAsistencia: 0 })
                porcentajeAsistencia = (obj_acc.totalAsistencia / obj_acc.totalCapacidad * 100).toFixed(2);
                categoryPastArrayInnerHtml.push(`<tr>
            <td>${event.category}</td>
            <td>$ ${obj_acc.totalGanancia}</td>
            <td>${porcentajeAsistencia}%</td>
            </tr>`)
            };
        })
        document.getElementById("PastCategories").innerHTML = categoryPastArrayInnerHtml.join("");
    } catch (error) {
        console.log("Ocurrió un error");
        console.log(error);
    }
}
async function createTableColumn() {
    try {
        let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming"
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let upcomingEventArray = [];
        for (let event of response.events) {
            upcomingEventArray.push(event);
        }
        let categoryUpcomingArray = [];
        let categoryUpcomingArrayFilter = [];
        let categoryUpcomingArrayInnerHtml = [];
        upcomingEventArray.forEach(event => {
            let estimado = "";
            let capacidad = "";
            let precio = "";
            let ganancia = "";
            let porcentajeEstimado = "";
            let obj_acc = {};
            if (!categoryUpcomingArray.includes(event.category)) {
                categoryUpcomingArray.push(event.category);
                categoryUpcomingArrayFilter = upcomingEventArray.filter(e => e.category == event.category)
                categoryUpcomingArrayFilter.reduce((acc, current) => {
                    estimado = current.estimate;
                    precio = current.price;
                    ganancia = estimado * precio;
                    capacidad = current.capacity;
                    obj_acc = {
                        totalGananciaEstimada: acc.totalGananciaEstimada + ganancia,
                        totalCapacidad: acc.totalCapacidad + capacidad,
                        totalAsistenciaEstimada: acc.totalAsistenciaEstimada + estimado
                    }
                    return obj_acc;
                }, { totalGananciaEstimada: 0, totalCapacidad: 0, totalAsistenciaEstimada: 0 })
                porcentajeEstimado = (obj_acc.totalAsistenciaEstimada / obj_acc.totalCapacidad * 100).toFixed(2);
                categoryUpcomingArrayInnerHtml.push(`<tr>
            <td>${event.category}</td>
            <td>$ ${obj_acc.totalGananciaEstimada}</td>
            <td>${porcentajeEstimado}%</td>
            </tr>`)
            };
        })
        document.getElementById("UpCategories").innerHTML = categoryUpcomingArrayInnerHtml.join("");
    } catch (error) {
        console.log("Ocurrió un error");
        console.log(error);
    }
}
createTable()
createTableColumn()