function cargarSitios() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../model/sitios.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var sitios = JSON.parse(xhr.responseText);
            var tarjetas = document.querySelectorAll(".card");

            for (var i = 0; i < sitios.length; i++) {
                tarjetas[i].querySelector(".nombre").textContent = sitios[i]["nombre"];
                tarjetas[i].querySelector(".foto").src = sitios[i]["foto"];
                tarjetas[i].querySelector(".descripcion").textContent = sitios[i]["descripcion"];
                
                
                var atractivos = sitios[i]["atractivos"];
                const contenedorAtractivos = document.getElementById('atractivos-cards');

                atractivos.forEach(atractivo => {
                    const card = document.createElement('div');
                    card.classList.add('card', "d-flex", "flex-row-reverse");

                    const cardBody = document.createElement('div');
                    cardBody.classList.add('card-body');

                    const nombre = document.createElement('h5');
                    nombre.classList.add('card-title');
                    nombre.textContent = atractivo.nombre;
                    cardBody.appendChild(nombre);

                    const resumen = document.createElement('p');
                    resumen.classList.add('card-text');
                    resumen.textContent = atractivo.resumen;
                    cardBody.appendChild(resumen);

                    const descripcion = document.createElement('p');
                    descripcion.classList.add('card-text');
                    descripcion.textContent = "Descripcion: " + atractivo.descripcion;
                    cardBody.appendChild(descripcion);

                    const imagen = document.createElement('img');
                    //imagen.classList.add("mx-auto", "d-block");
                    imagen.classList.add("card-img-bottom", "img-fluid");
                    imagen.src = atractivo.foto;

                    card.appendChild(cardBody);
                    card.appendChild(imagen); // Mover la etiqueta de imagen después del cardBody

                    contenedorAtractivos.appendChild(card);
                });
                }
        }
    };
    xhr.send();
}

// Llama a la función cargarEvento() cuando se carga la página
window.onload = cargarSitios;