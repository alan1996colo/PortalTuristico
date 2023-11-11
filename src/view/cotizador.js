var jsonDataCotiza = [];
fetch("https://www.dolarsi.com/api/api.php?type=cotizador")
    .then(response => response.json())
    .then(data => {
        jsonDataCotiza = data;
        crearCotizador();
    })
    .catch(error => console.error("No se pudo cargar el archivo JSON", error))
    .finally(() => {
    });

var jsonDataValores = [];
fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(response => response.json())
    .then(data => {
        jsonDataValores = data;
        crearValoresPromedio();
    })
    .catch(error => console.error("No se pudo cargar el archivo JSON", error))
    .finally(() => {
    });


var path = "../assets/"
var banderas = {
    "Dolar": "dolarusa.png",
    "Euro": "eurob.png",
    "Real": "real.png",
    "Libra Esterlina": "librauk.png",
    "Peso Uruguayo": "pesouruguayo.png",
    "Peso Chileno": "pesochileno.png",
    "Guaran\u00ed": "guarani.png",
    "Dolar Oficial": "dolaroficial.png",
    "Dolar Blue": "dolarblue.png",
    "Dolar Soja": "dolar_promedio.png",
    "Dolar Contado con Liqui": "dolarcontadoconliqui.png",
    "Dolar Bolsa": "dolarbolsa.png",
    "Bitcoin": "coin-bitcoin-filled.svg",
    "Dolar turista": "dolarturista.png",
}


function agregarElementosAlatabla(table, jsonData) {

    for (i = 0; i < jsonData.length; i++) {
        if (jsonData[i].casa.nombre == "Argentina") {//NO nos interesa esa cotizacion
            continue;
        }
        const tr = document.createElement('tr');
        var nuevaImagen = document.createElement('img');
        nuevaImagen.src = path + banderas[jsonData[i].casa.nombre];
        const td = document.createElement('td');
        td.appendChild(nuevaImagen);
        var venta = (jsonData[i].casa.venta.length > 0) ? jsonData[i].casa.venta : "";
        td.append(jsonData[i].casa.nombre)

        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td2.append(jsonData[i].casa.compra);
        td3.append(venta);
        tr.append(td);
        tr.append(td2);
        tr.append(td3);
        table.append(tr);


    }
}



function crearCotizador() {//euros, pesos, uru, chile, dolar
    const aside = document.getElementById("cotiza");
    const cotizador = document.createElement('div');
    const tabla = crearTabla("Cotizacion divisas");
    agregarElementosAlatabla(tabla, jsonDataCotiza);
    cotizador.append(tabla);
    aside.append(cotizador);

}
function crearValoresPromedio() {//dolar blue, liqui, oficial, turista
    const aside = document.getElementById("cotiza");
    const cotizador = document.createElement('div');
    const tabla = crearTabla("Valores Principales");
    agregarElementosAlatabla(tabla, jsonDataValores);
    cotizador.append(tabla);
    aside.append(cotizador);
}
function crearTabla(titulo) {


    const tabla = document.createElement('table');
    const ttitulo = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = titulo;
    th.classList.add('titulo')
    th.setAttribute('colspan', '3')
    ttitulo.append(th);
    tabla.append(ttitulo);

    const tsubt = document.createElement('tr');
    tsubt.classList.add('subtitulo');
    const moneda = document.createElement('th');
    const compra = document.createElement('th');

    const venta = document.createElement('th');
    moneda.textContent = "Moneda";
    compra.textContent = "Compra";
    venta.textContent = "venta";

    tsubt.append(moneda);
    tsubt.append(compra);
    tsubt.append(venta);

    tabla.append(tsubt);
    return tabla;
}

