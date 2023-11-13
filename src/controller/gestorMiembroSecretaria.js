// Intentamos cargar el archivo JSON existente (si existe)
var jsonData = [];

function obtenerFechaActual() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1; // Los meses van de 0 a 11
    var año = fecha.getFullYear();

    // Formatear la fecha como desees
    return año + "-" + (mes < 10 ? "0" : "") + mes + "-" + (dia < 10 ? "0" : "") + dia;
}

function cargarMiembrosSecretaria() {
    fetch("../model/secretariaMiembros.json")
        .then(response => response.json())
        .then(data => {
            jsonData = data;
        })
        .catch(error => console.error("No se pudo cargar el archivo JSON", error))
}

function agregarMiembrosSecretaria() {
    var miembro = {
        nombrePersonalSecretaria: document.getElementById("nombrePersonalSecretaria").value,
        apellidoPersonalSecretaria: document.getElementById("apellidoPersonalSecretaria").value,
        dniPersonalSecretaria: document.getElementById("dniPersonalSecretaria").value,
        fechaActual: obtenerFechaActual(),

        permisos: {
            permiso1: document.getElementById("opcion1").checked,
            permiso2: document.getElementById("opcion2").checked,
            permiso3: document.getElementById("opcion3").checked,
        }
    }
    
    jsonData.push(miembro);
}


function descargarMiembrosSecretaria() {
    // Guardamos los datos actualizados en el archivo JSON
    const jsonStr = JSON.stringify(jsonData);

    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "secretariaMiembros.json";
    a.click();
};

