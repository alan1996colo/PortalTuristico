
function agregarDatosAlJSON(validado, user_id) {

    if (validado) {
        var fechaActual = new Date();
        var dia = fechaActual.getDate();
        var mes = fechaActual.getMonth() + 1;
        var año = fechaActual.getFullYear();
        const formData = {
            user_id: user_id,
            fecha: dia + '/' + mes + '/' + año,
            categoria: document.forms["publisher"].elements["categoria"].value,
            title: document.forms["publisher"].elements["title"].value,
            disponible: true,
            tipo: document.forms["publisher"].elements["tipo"].value,
            resumen: document.forms["publisher"].elements["message"].value,
            precio: document.forms["publisher"].elements["precio"].value,
            imagen: {
                img1: document.forms["publisher"].elements["myPic"].value,
                img2: document.forms["publisher"].elements["myPic2"].value,
                img3: document.forms["publisher"].elements["myPic3"].value,
                img4: document.forms["publisher"].elements["myPic4"].value,
                img5: document.forms["publisher"].elements["myPic5"].value
            },
            restricciones: {
                niños: document.forms["publisher"].elements["niños"].checked,
                adultos: document.forms["publisher"].elements["adultos"].checked,
                movilidad: document.forms["publisher"].elements["movilidad"].checked,
                otro: document.forms["publisher"].elements["rOtro"].value
            },
            descripcion: document.forms["publisher"].elements["descripcion"].value,
            dimension: document.forms["publisher"].elements["dimensiones"].value,
            materiales: document.forms["publisher"].elements["materiales"].value,
            colores: document.forms["publisher"].elements["colores"].value,
            contacto: document.forms["publisher"].elements["contacto"].value,
            ubicacion: {
                latitud: document.forms["publisher"].elements["latitud"].value,
                longitud: document.forms["publisher"].elements["longitud"].value
            }
        };
        // Intentamos cargar el archivo JSON existente (si existe)
        let jsonData = [];

        // Supongamos que "datos.json" es el nombre del archivo JSON
        // Puedes ajustar la URL del archivo según tu configuración
        fetch("../model/productos.json")
            .then(response => response.json())
            .then(data => {
                jsonData = data;
            })
            .catch(error => console.error("No se pudo cargar el archivo JSON", error))
            .finally(() => {
                // Agregamos los nuevos datos al final del arreglo
                jsonData.push(formData);

                // Guardamos los datos actualizados en el archivo JSON
                const jsonStr = JSON.stringify(jsonData);
                const blob = new Blob([jsonStr], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "productos.json";
                a.click();
            });
    }
    else {
        alert("No se ha podido validar los datos correctamente,compruebe todos los campos obligatorios e  intente nuevamente")

    }
}
function getEstado(productos) {
    if (productos == true) {

        return "Disponible"
    } else {
        return "No Disponible"
    };
}


function restricciones(restriccionesObj) {
    var restriccionesTrue = [];

    for (var restriccion in restriccionesObj) {
        if (restriccionesObj[restriccion] === true) {
            restriccionesTrue.push(restriccion);
        }

    }
    if(restriccionesObj.otro!=''){
        restriccionesTrue.push(restriccionesObj.otro)
    }
    if (restriccionesTrue.length == 0) {
        return 'No'
    }

    return restriccionesTrue.join(', '); // Retorna una cadena separada por comas
}

function selectArticle(str){
    console.log("se ejecuta select")
    sessionStorage.setItem('articleSelected',str);
}
function getSelectedArticle(){
    return sessionStorage.getItem('articleSelected');
}

function cargarProducto(user_id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../model/productos.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var productos = JSON.parse(xhr.responseText);
            const misArticulos = document.getElementById('mis-articulos');

            for (var i = 0; i < productos.length; i++) {
                if (productos[i]["user_id"] === user_id) {

                    const articulo = document.createElement('article');
                    articulo.classList.add('card')
                    articulo.classList.add('d-flex')
                    articulo.classList.add('flex-row')

                    const imgCard = document.createElement('img');
                    imgCard.setAttribute('src', productos[i]["imagen"]["img1"]);
                    imgCard.classList.add('imglista');
                    articulo.append(imgCard);

                    const cardBody = document.createElement('div');
                    cardBody.classList.add('card-body');
                    articulo.append(cardBody)


                    const bodyHeader = document.createElement('header');
                    bodyHeader.classList.add('card-h');
                    cardBody.append(bodyHeader)

                    const cardTitle = document.createElement('h6');
                    cardTitle.classList.add('card-title');
                    cardTitle.textContent = productos[i]["title"];
                    bodyHeader.append(cardTitle);

                    const precioEditar = document.createElement('div');
                    precioEditar.classList.add('precio-editar');
                    bodyHeader.append(precioEditar);

                    const precio = document.createElement('div');
                    precio.classList.add('precio');
                    precio.textContent = '$' + productos[i]["precio"];
                    precioEditar.append(precio);

                    const editar = document.createElement('a');
                    editar.classList.add('btn');
                    editar.classList.add('btn-primary');
                    editar.textContent = 'Editar';
                    editar.setAttribute('data-title', productos[i]["title"]); // Agregar el atributo "data-title"
                    precioEditar.append(editar);
                    
                    const time = document.createElement('time');
                    time.textContent = productos[i]["fecha"];

                    cardBody.append(time);

                    const pCategoria = document.createElement('p');
                    pCategoria.innerHTML += 'Categoria:<span class="categoria" id="categoria">Farmacia</span> Estado: <span class="estado"> Disponible/No disponible</span>'
                    const categoria = pCategoria.querySelector('#categoria')
                    categoria.textContent = productos[i]["categoria"];


                    const estado = pCategoria.querySelector('.estado');
                    estado.textContent = getEstado(productos[i]["disponible"]);

                    cardBody.append(pCategoria)

                    cardBody.innerHTML += '<p>Tipo: <span class="tipo"> Articulo/servicio</span></p>'
                    const eTipo = cardBody.querySelector('.tipo');
                    eTipo.textContent = productos[i]["tipo"];

                    cardBody.innerHTML += ' <p> Restricciones:<span class="restricciones">Solo niños, solo mascotas, +18,etc</span></p>'
                    const eRestricciones = cardBody.querySelector('.restricciones');
                    eRestricciones.textContent = restricciones(productos[i]["restricciones"]);

                    cardBody.innerHTML += '<p class="card-text">Detalle:<span class="detalle">';
                    const eDetalle = cardBody.querySelector('.detalle');
                    eDetalle.textContent = productos[i]["resumen"];



                    misArticulos.append(articulo)
                }
            }
        }
        afterload();   
    };
    xhr.send();

}function afterload() {
    var elementos = document.querySelectorAll('.btn');
    console.log(elementos.length);

    for (var i = 0; i < elementos.length; i++) {
        console.log(i + 1);

        (function (el) {
            el.addEventListener("click", function () {
                console.log(el.getAttribute('data-title'));
            });
        })(elementos[i]); // Pass the current element to the closure
    }
}


    