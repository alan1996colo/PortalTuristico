var eventos = []; // Array para almacenar los eventos

function cargarEvento() {
    // Se valida que los campos no esten vacios
    var nombre = document.getElementById("nombre").value;
    var lugar = document.getElementById("lugar").value;
    var horario = document.getElementById("horario").value;
    var descripcion = document.getElementById("descripcion").value;

    if (nombre === "" || lugar === "" || horario === "" || descripcion === "") {
        alert("Por favor, complete todos los campos.");
    return false; // Evita que se realice la acción del botón
            }

    // Si los campos no están vacíos, realiza la acción del botón
    var evento = {
        nombre: nombre,
        lugar: lugar,
        horario: horario,
        descripcion: descripcion
    };
    console.log(evento);

    eventos.push(evento); // Agregar evento al array

    
}