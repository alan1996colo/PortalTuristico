function cargarEvento() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../model/eventos.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var eventos = JSON.parse(xhr.responseText);
            var tarjetas = document.querySelectorAll(".card-body");

            for (var i = 0; i < eventos.length; i++) {
                tarjetas[i].querySelector(".titulo").textContent = eventos[i]["Titulo del evento"];
                tarjetas[i].querySelector(".lugar").textContent = eventos[i]["Lugar"];
                tarjetas[i].querySelector(".horario").textContent = eventos[i]["Horario"];
                tarjetas[i].querySelector(".entrada").textContent = eventos[i]["Entrada"];
                tarjetas[i].querySelector(".descripcion").textContent = eventos[i]["Descripcion"];
                /*tarjetas[i].querySelector(".latitud").textContent = eventos[i]["Ubicacion"]["latitud"];
                tarjetas[i].querySelector(".longitud").textContent = eventos[i]["Ubicacion"]["longitud"];
            */ }
        }
    };
    xhr.send();
}

// Llama a la función cargarEvento() cuando se carga la página
window.onload = cargarEvento;
