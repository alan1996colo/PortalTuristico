function continuar(actual, siguiente) {
    if (validar(actual)) {
        mostrarElemento(siguiente);
        ocultarElemento(actual);
    }
    else {
        alert("un campo no se lleno")
    }

}
// Manejar la navegación entre pasos
function mostrarElemento(id) {

    document.getElementById(id).style.display = "flex";
    setTimeout(function () {
        var miDiv = document.getElementById(id); // Reemplaza 'miDiv' con el ID de tu div
        miDiv.classList.add('aparecer', 'mostrar');
        // Tu código que deseas ejecutar después de 1 segundo
    }, 50);


}
async function ocultarElemento(id) {
    document.getElementById(id).style.display = "none";
    var elemento = document.getElementById(id); // Reemplaza "miElemento" con el ID o selector de tu elemento

    // Quita la clase "mostrar" del elemento
    elemento.classList.remove("mostrar");


}
async function validar(id) {
    // Encuentra el elemento con el id "step-2"
    var seccion = document.getElementById(id);

    // Busca los campos "required" solo dentro de la sección "step-2"
    var camposRequeridos = seccion.querySelectorAll('[required]');
    var todosLlenos = true;

    camposRequeridos.forEach(function (element) {
        if (element.value.trim() === '') {
            todosLlenos = false;
        }
    });
    return todosLlenos

}
async function articulosSugeridosDe(articulo) {

    var sug = document.getElementById('sugerencia');
    document.getElementById('sugerencia').style.display = "block";
    sug.textContent = articulo;

    // Realiza la solicitud a la API de Mercado Libre utilizando fetch
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + articulo)
        .then(response => response.json())
        .then(data => {
            // Obtiene el primer resultado de la API (primer producto)
            const primerResultado = data.results[0];



            var lista = document.createElement('ul'); // Crear una lista ul

            for (i = 0; i < 10; i++) {
                var item = document.createElement('li'); // Crear elementos li
                item.textContent = data.results[i].title + " Precio:" + data.results[i].price + " Ars";
                lista.appendChild(item); // Agregar el elemento li a la lista ul
            }

            sug.appendChild(lista); // Agregar la lista al elemento con el id 'sugerencia'

            console.log("el precio es" + primerResultado.price + "fin precio");
        })
        .catch(error => {
            console.error('Error al hacer la solicitud a mercadoLibre:', error);
        });
}

function getUserId() {
    return sessionStorage.getItem("user_id")
}
function setUserId(num) {
    sessionStorage.setItem("user_id", num);
}
function marcarCategoriaSelected() {
    var producto = JSON.parse(sessionStorage.getItem("producto"));
    var cat = document.getElementById("categoria")
    for (var i = 0; i < cat.options.length; i++) {
        var opti = cat.options[i];
        if (opti.value === producto[0].categoria) {
            console.log(opti.value);
            opti.setAttribute("selected","selected");
        }
    }
}

function marcarTitulo(){
    var producto = JSON.parse(sessionStorage.getItem("producto"));
    var title=document.getElementById("title");
    title.value=producto[0].title;
}
function marcarResumen(){
    var producto = JSON.parse(sessionStorage.getItem("producto"));
    var resumen=document.getElementsByName("message")[0];
    resumen.value=producto[0].resumen;
}
function modificarTipo(){
    var producto = JSON.parse(sessionStorage.getItem("producto"));
    var tipo=document.getElementById("tipo");
    for (var i = 0; i < tipo.options.length; i++) {
        var opti = tipo.options[i];
        if (opti.value === producto[0].tipo) {
            console.log(opti.value);
            opti.setAttribute("selected","selected");
        }
    }
}

function modificarStock(){
    var producto = JSON.parse(sessionStorage.getItem("producto"));
var stock=document.getElementById("disponible");
for (var i = 0; i < stock.options.length; i++) {
    var opti = stock.options[i];
    if (toBoolean(opti.value) == producto[0].disponible) {
        console.log(opti.value);
        opti.setAttribute("selected","selected");
    }
}

}
function toBoolean(str){
    return str=="true";
}

function modificarImagenes(){
    var producto = JSON.parse(sessionStorage.getItem("producto"));
var mypic=document.getElementById("myPic");
var mypic2=document.getElementById("myPic2");
var mypic3=document.getElementById("myPic3");
var mypic4=document.getElementById("myPic4");
var mypic5=document.getElementById("myPic5");
mypic.value=producto[0].imagen.img1;
mypic2.value=producto[0].imagen.img2;
mypic3.value=producto[0].imagen.img3;
mypic4.value=producto[0].imagen.img4;
mypic5.value=producto[0].imagen.img5;


}

function modificarPrecio(){
    var producto = JSON.parse(sessionStorage.getItem("producto"));
    var precio=document.getElementById("precio");
precio.value=producto[0].precio;
}

function modificarRestriccion(){
    var producto=JSON.parse(sessionStorage.getItem("producto"));
    var ninos=document.getElementById("niños");
    var adultos=document.getElementById("adultos");
    var movilidad=document.getElementById("movilidad");
    var otro=document.getElementById("rOtro");
    ninos.checked=producto[0].restricciones.niños;
    adultos.checked=producto[0].restricciones.adultos;
    movilidad.checked=producto[0].restricciones.movilidad;
    otro.value=producto[0].restricciones.otro;

}

function modificarDescripcion(){
    var producto=JSON.parse(sessionStorage.getItem("producto"));
    var descripcion=document.getElementById("descripcion");
    descripcion.value=producto[0].descripcion;

}
function modificarTamano(){
    var producto=JSON.parse(sessionStorage.getItem("producto"));
    var tamano=document.getElementById("dimensiones");
    tamano.value=producto[0].dimension;
}
function modificarMateriales(){

    var producto=JSON.parse(sessionStorage.getItem("producto"));
    var material=document.getElementById("materiales");
    material.value=producto[0].materiales;

}
function modificarColores(){

    var producto=JSON.parse(sessionStorage.getItem("producto"));
    var colores=document.getElementById("colores");
    colores.value=producto[0].colores;
}
function modificarContactos(){


    var producto=JSON.parse(sessionStorage.getItem("producto"));
    var contacto=document.getElementById("contacto");
    contacto.value=producto[0].contacto;
}


function modificarUbicacion(){


    var producto=JSON.parse(sessionStorage.getItem("producto"));
    var latitud=document.getElementById("latitud");
    var longitud=document.getElementById("longitud");
    latitud.value=producto[0].ubicacion.latitud;
    longitud.value=producto[0].ubicacion.longitud;

}

/*
*/