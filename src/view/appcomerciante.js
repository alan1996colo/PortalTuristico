
function bajarML(){
 
          // Realiza la solicitud a la API de Mercado Libre utilizando fetch
          fetch('https://api.mercadolibre.com/sites/MLA/search?q=xiaomi')
            .then(response => response.json())
            .then(data => {
              // Obtiene el primer resultado de la API (primer producto)
              const primerResultado = data.results[0];
    
              // Convierte el primer resultado a formato JSON
              const resultadoJSON = JSON.stringify(primerResultado, null, 2);
    
              // Crea un enlace de descarga para el archivo JSON
              const blob = new Blob([resultadoJSON], { type: 'application/json' });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'resultado_xiaomi.json';
              a.click();
    
              console.log('Primer resultado guardado en resultado_xiaomi.json');
            })
            .catch(error => {
              console.error('Error al hacer la solicitud:', error);
            });
        
      
    
};
