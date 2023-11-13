function obtenerFechaActual() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1; // Los meses van de 0 a 11
    var año = fecha.getFullYear();

    // Formatear la fecha como desees
    return año + "-" + (mes < 10 ? "0" : "") + mes + "-" + (dia < 10 ? "0" : "") + dia;
    }

function agregarComercianteAlJSON() {
    const formData = {
        nombreComerciante: document.getElementById("nombreComerciante").value,
        apellidoComerciante: document.getElementById("apellidoComerciante").value,
        dniComerciante: document.getElementById("dniComerciante").value,
        fechaActual: obtenerFechaActual(),
        NombreComercio: document.getElementById("NombreComercio").value,
        direccionComercio: document.getElementById("direccionComercio").value,
        latitudComercio: document.getElementById("latitudComercio").value,
        longitudComercio: document.getElementById("longitudComercio").value,
        telComercio: document.getElementById("telComercio").value,
        horarioComercio: document.getElementById("horarioComercio").value,
        descripcionComercio: document.getElementById("descripcionComercio").value,
        categorias: {
            alimentosBebidas: document.getElementById("categoria1").checked,
            modaRopa: document.getElementById("categoria2").checked,
            electronicaTecnologia: document.getElementById("categoria3").checked,
            deporteEntretenimiento: document.getElementById("categoria4").checked,
            arteCultura: document.getElementById("categoria5").checked,
            saludBelleza: document.getElementById("categoria6").checked,
            otro: document.getElementById("categoria7").checked,
            hogarDecoracion: document.getElementById("categoria8").checked,
            mascotas: document.getElementById("categoria9").checked
        }

    };

    // Intentamos cargar el archivo JSON existente (si existe)
    let jsonData = [];

    // Supongamos que "datos.json" es el nombre del archivo JSON
    // Puedes ajustar la URL del archivo según tu configuración
    fetch("../model/comerciantesMiembros.json")
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
            a.download = "comerciantesMiembros.json";
            a.click();
        });
}
