
function agregarDatosAlJSON(validado, user_id, disponible) {

    if (validado) {
        var fechaActual = new Date();
        var dia = fechaActual.getDate();
        var mes = fechaActual.getMonth() + 1;
        var año = fechaActual.getFullYear();
        const sesionData = sessionStorage.getItem("producto");
        const formData = {
            user_id: user_id,
            fecha: dia + '/' + mes + '/' + año,
            categoria: document.forms["publisher"].elements["categoria"].value,
            title: document.forms["publisher"].elements["title"].value,
            disponible: disponible,
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

                const tituloABorrar = JSON.parse(sessionStorage.getItem("producto"));
                //el problema era que el json estaba como string, entonces en esta linea de arriba lo converti a json
                if (tituloABorrar != null && tituloABorrar.length != 0) {
                    for (let i = 0; i < jsonData.length; i++) {
                        if (jsonData[i].title === tituloABorrar[0].title && jsonData[i].user_id === tituloABorrar[0].user_id) {
                            jsonData.splice(i, 1); // Elimina el elemento en la posición i
                            i--; // Decrementa i para evitar omitir el siguiente elemento después de la eliminación
                        }
                    }
                }
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

function cargarProducto(user_id) {
    if (sessionStorage.getItem('sort') == null) {
        sessionStorage.setItem('sort', 'reciente');
    }
    sort = sessionStorage.getItem('sort');

    if (sessionStorage.getItem('ratio') == null) {
        sessionStorage.setItem('ratio', '50');
    }
    var ratio = sessionStorage.getItem('ratio');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../model/productos.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var productos = JSON.parse(xhr.responseText);
            if (ratio != '50') {
                productos = productos.filter(producto => {
                    const distancia = calcularDistancia(parseFloat(sessionStorage.getItem('latitud')), parseFloat(sessionStorage.getItem('longitud')),
                        parseFloat(producto.ubicacion.latitud),
                        parseFloat(producto.ubicacion.longitud)
                    );
                    console.log('distancia:' + distancia + ' ratio:' + ratio + ' titulo:' + producto.title);//breakpoint
                    return distancia < parseInt(ratio);
                });
            }

            if (sort == 'cercano') {
                productos.sort(function (a, b) {
                    var distanciaA = calcularDistancia(parseFloat(sessionStorage.getItem('latitud')), parseFloat(sessionStorage.getItem('longitud')), parseFloat(a.ubicacion.latitud), parseFloat(a.ubicacion.longitud));
                    var distanciaB = calcularDistancia(parseFloat(sessionStorage.getItem('latitud')), parseFloat(sessionStorage.getItem('longitud')), parseFloat(b.ubicacion.latitud), parseFloat(b.ubicacion.longitud));
                    return distanciaA - distanciaB;
                });
            }
            if (sort == 'lejano') {
                productos.sort(function (a, b) {
                    var distanciaA = calcularDistancia(parseFloat(sessionStorage.getItem('latitud')), parseFloat(sessionStorage.getItem('longitud')), parseFloat(a.ubicacion.latitud), parseFloat(a.ubicacion.longitud));
                    var distanciaB = calcularDistancia(parseFloat(sessionStorage.getItem('latitud')), parseFloat(sessionStorage.getItem('longitud')), parseFloat(b.ubicacion.latitud), parseFloat(b.ubicacion.longitud));
                    return distanciaB - distanciaA;
                });
            }


            if (sort == "antiguo") {
                productos.sort(function (a, b) {
                    // Convierte las fechas en objetos Date para que se puedan comparar
                    var dateA = new Date(a.fecha.split('/').reverse().join('/'));
                    var dateB = new Date(b.fecha.split('/').reverse().join('/'));

                    // Compara las fechas
                    return dateA - dateB;
                });
            }
            if (sort == "reciente") {
                productos.sort(function (a, b) {
                    // Convierte las fechas en objetos Date para que se puedan comparar
                    var dateA = new Date(a.fecha.split('/').reverse().join('/'));
                    var dateB = new Date(b.fecha.split('/').reverse().join('/'));

                    // Compara las fechas en sentido inverso (de más reciente a más antiguo)
                    return dateB - dateA;
                });
            }
            const misArticulos = document.getElementById('mis-articulos');
            var contador = 0;
            var ii = 0;
            if (sessionStorage.getItem('paginaDesde') != null) {
                ii = parseInt(sessionStorage.getItem('paginaDesde'))

            }
            for (i = ii; i < productos.length; i++) {
                if (productos[i]["user_id"] === user_id) {//el comerciante solo ve sus productos

                    misArticulos.append(crearArticulo(productos[i], user_id));
                }
                else {
                    //checkeamos en sesion.storage en que pagina nos encontramos
                    if (sessionStorage.getItem('paginaDesde') == null) {
                        sessionStorage.setItem('paginaDesde', 0);
                        sessionStorage.setItem('cantProductosMostrar', 5);
                    }

                    if (i >= sessionStorage.getItem('paginaDesde') && contador < sessionStorage.getItem('cantProductosMostrar') && productos[i]["disponible"]) {//el visitante solo ve los productos disponibles.

                        if (sessionStorage.getItem('filtrarServicios') == 'true') {
                            console.log("entro en filtrar servicios");
                            if (productos[i]['tipo'] === 'Servicio') {
                                console.log("entro en crear productos");

                                misArticulos.append(crearArticulo(productos[i], user_id));

                                contador++;
                                sessionStorage.setItem('ultimoProducto', i);
                            }
                        }

                        else {
                            if (sessionStorage.getItem('filtrarArticulos') == 'true') {
                                console.log("entro en filtrar articulos");


                                if (productos[i]['tipo'] === 'Producto') {
                                    misArticulos.append(crearArticulo(productos[i], user_id));

                                    contador++;
                                    sessionStorage.setItem('ultimoProducto', i);
                                }




                            }
                            else {
                                if (sessionStorage.getItem('filtrarArticulos') == null || sessionStorage.getItem('filtrarArticulos') == false && sessionStorage.getItem('filtrarServicios') == false) {


                                    misArticulos.append(crearArticulo(productos[i], user_id));

                                    contador++;
                                    sessionStorage.setItem('ultimoProducto', i);
                                }

                            }
                        }




                    }


                }
            }

            mapitaMostrar(productos);

        }

        afterload();
    };
    xhr.send();

}
function siguientePagina() {
    sessionStorage.setItem('paginaDesde', parseInt(sessionStorage.getItem('ultimoProducto')) + 1);
}
function anteriorPagina() {
    var desde = parseInt(sessionStorage.getItem('paginaDesde')) - 5 < 0 ? 0 : parseInt(sessionStorage.getItem('paginaDesde')) - 5;
    sessionStorage.setItem('paginaDesde', desde);

}

function filtrarArticulosyServicios(value) {
    if (value == 1) {
        filtrarArticulos(true);
        filtrarServicios(false);
    }

    else if (value == 2) {
        filtrarArticulos(false);
        filtrarServicios(true);


    }
    else {

        filtrarArticulos(false);
        filtrarServicios(false);
    }
    location.reload();

}

function filtrarServicios(boolean) {
    sessionStorage.setItem('filtrarServicios', boolean);


}
function filtrarArticulos(boolean) {
    sessionStorage.setItem('filtrarArticulos', boolean);



}

function crearArticulo(producto, cliente) {

    const articulo = document.createElement('article');
    articulo.classList.add('card')
    articulo.classList.add('d-flex')
    articulo.classList.add('flex-row')

    articulo.append(crearImg(producto["imagen"]["img1"]));

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    articulo.append(cardBody)


    const bodyHeader = document.createElement('header');
    bodyHeader.classList.add('card-h');
    cardBody.append(bodyHeader)

    const cardTitle = document.createElement('h6');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = producto["title"];
    bodyHeader.append(cardTitle);

    const precioEditar = document.createElement('div');
    precioEditar.classList.add('precio-editar');
    bodyHeader.append(precioEditar);

    const precio = document.createElement('div');
    precio.classList.add('precio');
    precio.textContent = '$' + producto["precio"];
    precioEditar.append(precio);

    if (cliente != "visitante") {
        precioEditar.append(crearBoton(producto["title"], producto["user_id"]));
    }
    else {
        precioEditar.append(crearVermas(producto["title"], producto["user_id"]));
    }
    const time = document.createElement('time');
    time.textContent = producto["fecha"];

    cardBody.append(time);

    const pCategoria = document.createElement('p');
    if (cliente != "visitante") {
        pCategoria.innerHTML += 'Categoria:<span class="categoria" id="categoria">Farmacia</span> Estado: <span class="estado"> Disponible/No disponible</span>'

        const categoria = pCategoria.querySelector('#categoria')
        categoria.textContent = producto["categoria"];


        const estado = pCategoria.querySelector('.estado');
        estado.textContent = getEstado(producto["disponible"]);
    }
    else {
        pCategoria.innerHTML += 'Categoria:<span class="categoria" id="categoria">Farmacia</span>';
        const categoria = pCategoria.querySelector('#categoria')
        categoria.textContent = producto["categoria"];
    }
    cardBody.append(pCategoria)

    cardBody.innerHTML += '<p>Tipo: <span class="tipo"> Articulo/servicio</span></p>'
    const eTipo = cardBody.querySelector('.tipo');
    eTipo.textContent = producto["tipo"];

    cardBody.innerHTML += ' <p> Restricciones:<span class="restricciones">Solo niños, solo mascotas, +18,etc</span></p>'
    const eRestricciones = cardBody.querySelector('.restricciones');
    eRestricciones.textContent = restricciones(producto["restricciones"]);

    cardBody.innerHTML += '<p class="card-text">Detalle:<span class="detalle">';
    const eDetalle = cardBody.querySelector('.detalle');
    eDetalle.textContent = producto["resumen"];

    if (cliente == "visitante") {
        cardBody.append(insertarNombreVendedor(producto["user_id"]))
    }
    return articulo;
}

function insertarNombreVendedor(vendedorNombre) {
    const footer = document.createElement('footer');
    const a = document.createElement('a');
    a.setAttribute('href', '#');//mas adelante si creamos perfiles de vendedor podemos enlazar aca
    a.setAttribute('title', 'nombre del comercio');
    a.textContent = vendedorNombre;
    footer.append(a);
    return footer;

}

function crearImg(url) {
    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', url);
    imgCard.classList.add('imglista');
    return imgCard;
}
function crearBoton(dataTitle, vendedor) {

    const editar = document.createElement('a');
    editar.classList.add('btn');
    editar.classList.add('btn-primary');
    editar.textContent = 'Editar';
    editar.setAttribute('href', 'comercianteActualizar.html')
    editar.setAttribute('data-title', dataTitle); // Agregar el atributo "data-title"
    editar.setAttribute('vendedor', vendedor);

    return editar;
}
function crearVermas(dataTitle, vendedor) {
    const vermas = document.createElement('a');
    vermas.classList.add('btn');
    vermas.classList.add('btn-primary');
    vermas.textContent = 'Ver más';
    vermas.setAttribute('href', 'visitanteArticuloDetalle.html')
    vermas.setAttribute('data-title', dataTitle); // Agregar el atributo "data-title"
    vermas.setAttribute('vendedor', vendedor)
    return vermas;

}

function getEstado(productos) {
    if (productos == true) {

        return "Disponible"
    }
    else {
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
    if (restriccionesObj.otro != '') {
        restriccionesTrue.push(restriccionesObj.otro)
    }
    if (restriccionesTrue.length == 0) {
        return 'No'
    }

    return restriccionesTrue.join(', '); // Retorna una cadena separada por comas
}


/***Agrega el evento a todos los botones para que guarde a cual articulo se dio click**/
function afterload() {
    var elementos = document.querySelectorAll('.btn');
    for (var i = 0; i < elementos.length; i++) {
        (function (el) {
            el.addEventListener("click", function () {

                selectArticle(el.getAttribute('data-title'));
                selectVendedor(el.getAttribute('vendedor'));
            });
        })(elementos[i]); // Pass the current element to the closure
    }
}

function selectArticle(str) {
    console.log("se ejecuta select")
    sessionStorage.setItem('articleSelected', str);
}
function getSelectedArticle() {
    return sessionStorage.getItem('articleSelected');
}
function selectVendedor(vendedor) {
    sessionStorage.setItem('vendedor', vendedor);
}

/**
 * Carga el item con el userId y title, previamente almacenado en la sesionStorage
 * y almacena el objeto JSOn en un arreglo Json en la sesionStorage, en el item variable "producto"
 */
function cargarUnproducto() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../model/productos.json", false); // No quiero que se cargue la página si no se cargó el producto.
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var productos = JSON.parse(xhr.responseText);
            var resultado = [];
            for (var i = 0; i < productos.length; i++) {
                if (productos[i].user_id === getUserId() && productos[i].title === getSelectedArticle()) {
                    console.log("Se encontró el artículo esperado en la posición " + i);
                    resultado.push(productos[i]);
                }
            }
            // Guardar los resultados en el sessionStorage
            sessionStorage.setItem("producto", JSON.stringify(resultado));
        }
    };
    xhr.send();

}

/**Carga el producto del vendedor pasado por parametro y lo almacena en sesionStorage "producto" */
function cargarElproducto(titulo, vendedor) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../model/productos.json", false); // No quiero que se cargue la página si no se cargó el producto.
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var productos = JSON.parse(xhr.responseText);
            var resultado = [];
            for (var i = 0; i < productos.length; i++) {
                if (productos[i].user_id === vendedor && productos[i].title === titulo) {
                    console.log("Se encontró el artículo esperado en la posición " + i);
                    resultado.push(productos[i]);
                }
            }
            // Guardar los resultados en el sessionStorage
            sessionStorage.setItem("producto", JSON.stringify(resultado));
        }
    };
    xhr.send();

}


function seleccionarSort(value) {
    switch (value) {
        case 'reciente':
            setSortReciente();
            break;
        case 'antiguo':
            setSortAntiguo();
            break;
        case 'cercano':
            setSortCercano();
            break;
        case 'lejano':
            setSortLejano();
            break;

        default:
            setSortReciente();
            break;
    }
    location.reload();

}
function setSortLejano() {
    obtenerUbicacion();
    sessionStorage.setItem('sort', 'lejano');
}

function setSortCercano() {
    obtenerUbicacion();
    sessionStorage.setItem('sort', 'cercano');
}

function setSortReciente() {
    sessionStorage.setItem('sort', 'reciente');
}
function setSortAntiguo() {
    sessionStorage.setItem('sort', 'antiguo');
}


function selectFiltrarRatio(value) {
    obtenerUbicacion()
        .then(() => {
            // La ubicación se ha obtenido, puedes continuar con el resto del código
            if (value > 0) {
                sessionStorage.setItem('ratio', value);
                console.log('ratio okay');
                location.reload();
            } else {
                console.log("Error: el radio debe ser mayor a cero");
            }
        })
        .catch(error => {
            console.error("Error al obtener la ubicación: " + error.message);
        });
}

function obtenerUbicacion() {
    return new Promise((resolve, reject) => {
        if (sessionStorage.getItem('latitud') !== null) {
            // Si la ubicación ya está en sessionStorage, resuelve la promesa
            resolve();
        } else if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    sessionStorage.setItem('latitud', position.coords.latitude);
                    sessionStorage.setItem('longitud', position.coords.longitude);
                    resolve();  // Resuelve la promesa cuando la ubicación se obtiene con éxito
                },
                function (error) {
                    reject(error);  // Rechaza la promesa si hay un error al obtener la ubicación
                }
            );
        } else {
            reject(new Error("Geolocalización no es compatible en este navegador"));
        }
    });
}

function calcularDistancia(lat1, lon1, lat2, lon2) {
    // Radio de la Tierra en kilómetros
    const radioTierra = 6371;

    // Convertir las coordenadas de grados a radianes
    const latitud1Rad = gradosARadianes(lat1);
    const longitud1Rad = gradosARadianes(lon1);
    const latitud2Rad = gradosARadianes(lat2);
    const longitud2Rad = gradosARadianes(lon2);

    // Diferencias de coordenadas
    const deltaLatitud = latitud2Rad - latitud1Rad;
    const deltaLongitud = longitud2Rad - longitud1Rad;

    // Fórmula de la haversina
    const a = Math.sin(deltaLatitud / 2) * Math.sin(deltaLatitud / 2) +
        Math.cos(latitud1Rad) * Math.cos(latitud2Rad) *
        Math.sin(deltaLongitud / 2) * Math.sin(deltaLongitud / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Distancia en kilómetros
    const distancia = radioTierra * c;

    return distancia;
}

function gradosARadianes(grados) {
    return grados * (Math.PI / 180);
}

function resetPage() {
    sessionStorage.setItem('paginaDesde', 0);
    location.reload();
}
