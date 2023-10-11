
function agregarDatosAlJSON() {
    const formData = {
        title: document.getElementById("fname").value,
        tipo: document.getElementById("tipo").value,
        descripcion: document.querySelector('textarea[name="message"]').value,
        precio: document.getElementById("price").value,
        restricciones: {
            niños: document.getElementById("niños").checked,
            adultos: document.getElementById("adultos").checked,
            movilidad: document.getElementById("movilidad").checked,
            otro: document.getElementById("rOtro").value
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
