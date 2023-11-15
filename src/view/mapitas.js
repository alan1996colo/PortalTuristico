function mapitaMostrar(productos){
     // Coordenadas aproximadas de San Miguel, Argentina
  var sanMiguelCoordinates = [-34.5444, -58.7111];

  // Inicializa el mapa centrado en San Miguel
  var mymap = L.map('map').setView(sanMiguelCoordinates, 13);

   
  // Añade un mapa base de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(mymap);

    for(var i =0;i<productos.length;i++){
        var marcar=[parseFloat(productos[i].ubicacion.latitud),parseFloat(productos[i].ubicacion.longitud)];

        let name=productos[i].user_id;
 // Añade un marcador en San Miguel
 L.marker(marcar).addTo(mymap) .bindPopup(name).openPopup();

    }

 
}