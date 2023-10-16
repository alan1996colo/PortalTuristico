// Variable global donde se cargan los sitios de interes
var sitios = [];

function cargarSitios() {
    // Se cargan sitios previamente cargados
    // Intentamos cargar el archivo JSON existente (si existe)
    fetch('../model/registroSitios.json')
        .then(response => response.json())
        .then(data => {
            sitios = data;
        })
        .catch(error => console.error("No se pudo cargar el archivo JSON", error));
}

function agregarSitio(){ 
    // Agregamos el nuevo sitio
    var sitio = {
        nombre: document.getElementById("nombre").value,
        foto: document.getElementById("foto").value,
        descripcion: document.getElementById("descripcion").value,
        atractivos: []
    };
    
    sitios.push(sitio);
}

function agregarAtractivo() {
    // Agregamos el nuevo atractivo
    var atractivo = {
        nombre: document.getElementById("nombreAtract").value,
        foto: document.getElementById("fotoAtract").value,
        resumen: document.getElementById("resumenAtract").value,
        descripcion: document.getElementById("descripcionAtract").value
    };

    var sitioActual = sitios[sitios.length - 1];
    sitioActual.atractivos.push(atractivo);
}

function descargarSitios() {
    // Guardamos los datos actualizados en el archivo JSON
    const jsonStr = JSON.stringify(sitios);
    
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "registroSitios.json";
    a.click();
}