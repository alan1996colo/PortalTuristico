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


var path="../assets/"
var banderas={
    "Dolar":"dolarusa.png",
    "Euro":"eurob.png",
    "Real":"real.png",
    "Libra Esterlina":"librauk.png",
    "Peso Uruguayo":"pesouruguayo.png",
    "Peso Chileno":"pesochileno.png",
    "Guaran\u00ed":"guarani.png",
    "Dolar Oficial":"dolaroficial.png",
    "Dolar Blue":"dolarblue.png",
    "Dolar Soja":"dolar_promedio.png",
    "Dolar Contado con Liqui":"dolarcontadoconliqui.png",
    "Dolar Bolsa":"dolarbolsa.png",
    "Bitcoin":"cotizacion.svg",
    "Dolar turista":"dolarturista.png",
}


function agregarElementosAlaLista(ul,jsonData){
    
    for (i=0;i<jsonData.length-1;i++){
        const li=document.createElement('li');
        var nuevaImagen = document.createElement('img');
        nuevaImagen.src = path+banderas[jsonData[i].casa.nombre];
        li.appendChild(nuevaImagen);
        li.append(jsonData[i].casa.nombre+" compra :"+jsonData[i].casa.compra+" venta :"+jsonData[i].casa.venta)
        ul.append(li)
    
}}



function crearCotizador(){//euros, pesos, uru, chile, dolar
    const aside=document.getElementById("cotiza");
    const cotizador=document.createElement('div');
    const listaTitulo=document.createElement('h3');
    listaTitulo.textContent="Cotizacion divisas"
    cotizador.append(listaTitulo);
    const lista=document.createElement('ul');
    agregarElementosAlaLista(lista,jsonDataCotiza);
    cotizador.append(lista);
    aside.append(cotizador);

}
function crearValoresPromedio(){//dolar blue, liqui, oficial, turista
    const aside=document.getElementById("cotiza");
    const cotizador=document.createElement('div');
    const listaTitulo=document.createElement('h3');
    listaTitulo.textContent="Valores Principales"
    cotizador.append(listaTitulo);
    const lista=document.createElement('ul');
    agregarElementosAlaLista(lista,jsonDataValores);
    cotizador.append(lista);
    aside.append(cotizador);
}

