function continuar(actual, siguiente) {
    if (validar(actual)) {
        mostrarElemento(siguiente);
        ocultarElemento(actual);
    }
    else{
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
function ocultarElemento(id) {
    document.getElementById(id).style.display = "none";
    var elemento = document.getElementById(id); // Reemplaza "miElemento" con el ID o selector de tu elemento

    // Quita la clase "mostrar" del elemento
    elemento.classList.remove("mostrar");


}
function validar(id) {
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
function articulosSugeridosDe(articulo) {

    var sug = document.getElementById('sugerencia');
    document.getElementById('sugerencia').style.display = "block";
    sug.textContent=articulo;

    // Realiza la solicitud a la API de Mercado Libre utilizando fetch
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + articulo)
        .then(response => response.json())
        .then(data => {
            // Obtiene el primer resultado de la API (primer producto)
            const primerResultado = data.results[0];
        
            
           
            var lista = document.createElement('ul'); // Crear una lista ul
            
            for (i = 0; i < 10; i++) {
                var item = document.createElement('li'); // Crear elementos li
                item.textContent = data.results[i].title+" Precio:"+data.results[i].price+" Ars";
                lista.appendChild(item); // Agregar el elemento li a la lista ul
            }
            
            sug.appendChild(lista); // Agregar la lista al elemento con el id 'sugerencia'
            
            console.log("el precio es" + primerResultado.price + "fin precio");
        })
        .catch(error => {
            console.error('Error al hacer la solicitud:', error);
        });
}
