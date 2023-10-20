
function agregarDatosAlJSON(validado) {
    if (validado) {
        var fechaActual = new Date();
        var dia = fechaActual.getDate();
        var mes = fechaActual.getMonth() + 1;
        var año = fechaActual.getFullYear();
        const formData = {
            fecha: dia + '/' + mes + '/' + año,
            categoria: document.forms["publisher"].elements["categoria"].value,
            title: document.forms["publisher"].elements["title"].value,
            disponible: true,
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
else{alert("No se ha podido validar los datos correctamente,compruebe todos los campos obligatorios e  intente nuevamente")
    
}}

function cargarProducto() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../model/productos.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var productos = JSON.parse(xhr.responseText);
            var tarjetas = document.querySelectorAll(".card-body");

            for (var i = 0; i < eventos.length; i++) {
                tarjetas[i].querySelector(".titulo").textContent = productos[i]["Titulo del evento"];
                tarjetas[i].querySelector(".lugar").textContent = productos[i]["Lugar"];
                tarjetas[i].querySelector(".horario").textContent = productos[i]["Horario"];
                tarjetas[i].querySelector(".entrada").textContent = productos[i]["Entrada"];
                tarjetas[i].querySelector(".descripcion").textContent = productos[i]["Descripcion"];
                /*tarjetas[i].querySelector(".latitud").textContent = eventos[i]["Ubicacion"]["latitud"];
                tarjetas[i].querySelector(".longitud").textContent = eventos[i]["Ubicacion"]["longitud"];
            */ }
        }
    };
    xhr.send();
}
