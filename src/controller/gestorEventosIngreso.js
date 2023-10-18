// Variable global donde se cargan los eventos
var eventos = [];

function cargarEventos() {
    // Se cargan eventos previamente cargados
    // Intentamos cargar el archivo JSON existente (si existe)
    fetch("../model/registroEventos.json")
        .then(response => response.json())
        .then(data => {
            eventos = data;
        })
        .catch(error => console.error("No se pudo cargar el archivo JSON", error));
}

function agregarEvento(){
    // Agregamos el nuevo evento
    var evento = {
        nombre: document.getElementById("nombre").value,
        lugar: document.getElementById("lugar").value,
        horario: document.getElementById("horario").value,
        descripcion: document.getElementById("descripcion").value
    };
    
    eventos.push(evento);
}

function descargarEventos() {
    // Guardamos los datos actualizados en el archivo JSON
    const jsonStr = JSON.stringify(eventos);
    
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "registroEventos.json";
    a.click();
}