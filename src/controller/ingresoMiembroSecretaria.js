function agregarPersonalSecretariaAlJSON() {
    const formData = {
        nombrePersonalSecretaria: document.getElementById("nombrePersonalSecretaria").value,
        apellidoPersonalSecretaria: document.getElementById("apellidoPersonalSecretaria").value,
        dniPersonalSecretaria: document.getElementById("dniPersonalSecretaria").value,
    
        permisos: {
            permiso1: document.getElementById("opcion1").checked,
            permiso2: document.getElementById("opcion2").checked,
            permiso3: document.getElementById("opcion3").checked,
        }
    };

    // Intentamos cargar el archivo JSON existente (si existe)
    let jsonData = [];

    // Supongamos que "datos.json" es el nombre del archivo JSON
    // Puedes ajustar la URL del archivo según tu configuración
    fetch("../model/secretariaMiembros.json")
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
            a.download = "secretariaMiembros.json";
            a.click();
        });
}
