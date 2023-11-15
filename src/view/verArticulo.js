var GLOBALPRODUCTO;
function mostrarArticulo() {
    console.log(sessionStorage.getItem('articleSelected') + "  " + sessionStorage.getItem('vendedor'));
    cargarElproducto(sessionStorage.getItem('articleSelected'), sessionStorage.getItem('vendedor'));
    GLOBALPRODUCTO = JSON.parse(sessionStorage.getItem('producto'));
    //console.log("1234"+GLOBALPRODUCTO[0].user_id);
    reemplazarFotos();
    reemplazartitulo();
    reemplazarPrecio();
    reemplazarResumen();
    reemplazarDetalles();
    reemplazarDimension();
    reemplazarMateriales();
    reemplazarColores();
    reemplazarRestricciones();
    reemplazarCategoria();

    mapitaMostrar(GLOBALPRODUCTO);
}
function reemplazarFotos() {
    var img = document.getElementById('imagenPrincipal');
    img.setAttribute('src', GLOBALPRODUCTO[0]['imagen']['img1']);
    img = document.getElementById('img2');
    img.setAttribute('src', GLOBALPRODUCTO[0]['imagen']['img2']);
    img = document.getElementById('img3');
    img.setAttribute('src', GLOBALPRODUCTO[0]['imagen']['img3']);
    img = document.getElementById('img4');
    img.setAttribute('src', GLOBALPRODUCTO[0]['imagen']['img4'])
}
function reemplazartitulo() {
    var title = document.getElementById('tituloacambiar');
    title.textContent = GLOBALPRODUCTO[0].title;
    title = document.getElementById('titulo');
    title.textContent = GLOBALPRODUCTO[0].title;
}
function reemplazarPrecio() {
    var precio = document.getElementById('precio');
    precio.textContent = GLOBALPRODUCTO[0].precio;

}
function reemplazarResumen() {
    var resumen = document.getElementById('resumen');
    resumen.textContent = GLOBALPRODUCTO[0].resumen;
}
function reemplazarDetalles() {
    var detalles = document.getElementById('detalles');
    detalles.textContent = GLOBALPRODUCTO[0].descripcion;
}
function reemplazarDimension() {
    let dimension = document.getElementById('dimension');
    dimension.textContent = GLOBALPRODUCTO[0].dimension;
}
function reemplazarMateriales() {
    let materiales = document.getElementById('materiales');
    materiales.textContent = GLOBALPRODUCTO[0].materiales;
}
function reemplazarColores() {
    let colores = document.getElementById('colores');
    colores.textContent = GLOBALPRODUCTO[0].colores != null ? "Disponible en " + GLOBALPRODUCTO[0].colores : "";

}
function reemplazarRestricciones() {
    let restriccion = document.getElementById('restricciones');
    restriccion.textContent = GLOBALPRODUCTO[0].restricciones.otro;
}
function reemplazarCategoria() {
    let categoria = document.getElementById('categoria');
    categoria.textContent = GLOBALPRODUCTO[0].categoria;
}