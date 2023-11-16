# Portal Turistico

_Este software se proporciona 'tal cual' sin garantías ni condiciones de ningún tipo, ya sean expresas o implícitas. El usuario asume la total responsabilidad por el uso del software y comprende que el desarrollador no será responsable de posibles daños o problemas derivados del uso o rendimiento del software._
## Índice
- [Introducción](#introduccion)
- [Instalación](#instalación)
- [Uso visitante](#visitante)
- [Uso Secretaria](#secretaria)
- [Uso comerciante](#comerciante)
- [Uso Supervisor](#supervisor)
- [Contribuciones](#contribuciones)

## Updates (desarrolladores)
Enlaces utiles:

- [Mozilla](https://developer.mozilla.org/es/): *Documentación y recursos para desarrolladores web*.
- [w3school](https://www.w3schools.com/): _Tutoriales interactivos y referencias web_.
- [tailwind](https://tailwindcss.com/docs/installation): _proporcionar utilidades de estilo que permiten construir diseños web personalizados de manera eficiente_.
- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/): *proporciona componentes y estilos predefinidos para crear sitios web y aplicaciones web responsivas de manera rápida*.

------------------------------------------------------------
		19/10/23
		
La persistencia de archivos maneniendo los datos previos solo funciona montando algun servidor , porque se supone que el navegador no deberia poder tener acceso a tus archivos sin tu consentimiento.
Para resolver esto estamos usando la extension de VisualStudio LiveServer.
Se puede instalar facilmente desde el IDE, o consultar el repo de los desarrolladores.

[LiveServer](https://github.com/ritwickdey/vscode-live-server-plus-plus)
------------------------------------------------------------------
		9/11/23
  
 ## Acceso rapido a la Documentacion:
-  [Requerimientos](https://github.com/alan1996colo/PortalTuristico/blob/master/docs/SRS-Portal-Turistico.pdf)
-  [Casos de uso](https://drive.google.com/file/d/19FAd61mSIlAhghX8Roo4W9CKN9HgQOzS/view?usp=sharing)
-  [Arquitectura](https://drive.google.com/file/d/1UUZjI6-6o-RYY2M_ukrtK4pF-QJOCdZ_/view?usp=sharing)
-  [Modelo conceptual](https://drive.google.com/file/d/116j2FeV5MUKVlBiLlnocm33J7B6JeDU7/view?usp=sharing)
-  [Grant](https://github.com/alan1996colo/PortalTuristico/blob/master/docs/GantPortalTuristico.pdf)


## [Introduccion](#Introduccion)
La Secretaría de Turismo de una ciudad busca promover el turismo mediante la creación de un portal virtual. Este portal conectará a residentes y visitantes con eventos y servicios locales, mejorando la interacción y participación. Funcionalidades clave incluyen la divulgación de actividades, descripción de lugares de interés, registro de comerciantes, comparación de precios, y ubicación de comercios.

## [Instalación](#instalación)
1. Clone o descargue el repositorio $ git clone https://github.com/alan1996colo/PortalTuristico.git
2. Dirijase a la carpeta PortalTuristico/src/view
3. Abra el archivo uiVisitanteHome.html con visualStudiocode
   1.	Si no tiene instalado visual Studio Code, pero tiene conocimientos en apacheServer y otros servidores.
   2.	Mueva la carpeta al DocumentRoot o equivalente wwww. configure apache,  vaya visitando las url que ve a continuacion y disfrute
   3.	Si no tiene ese tipo de conocimientos use el comando ´$ sudo apt install code´ para instalarl visual studio code
   4.	Luego desde visual Studio code, descague la extension LiveServer.
4. Haga segundo click en el archivo uiVisitanteHome.html y seleccione en "open with liveServer"
5. Desde ahora cada vez que quiera probar una pagina, debe abrirla de esta manera, o si ya ha iniciado liveServer, solo debe ingresar la url de la pagina que quiere visitar.


## [visitante](#visitante)
![Menu del home](https://github.com/alan1996colo/PortalTuristico/blob/master/data/menu.png)

Si accedemos a la pagina uiVisitanteHome.html,
Como visitante en la parte superior se encuentran las categorías de mayor interés para el turista.

![Eventos](https://github.com/alan1996colo/PortalTuristico/blob/master/data/eventos.png)
Haciendo click en Eventos, se encontrará con una lista de ellos detallando la hora y lugar junto con una descripción y costo de entrada, incluso a la derecha se encuentra un calendario donde están marcados los distintos eventos.
![mar de las sirenas](https://github.com/alan1996colo/PortalTuristico/blob/master/data/marde.png)

Haciendo click en Sitios de interés, se encontrará con los distintos sitios disponibles para visitar, cada uno con una pequeña descripción. Si se hace click en atractivos del lugar colapsará una lista de ellos con una descripción de lo que tratan.

![Sitios de interes](https://github.com/alan1996colo/PortalTuristico/blob/master/data/sitiosde.png)

Haciendo click en Asistencia, se encontrará con los centros de asistencia tanto fijos como móviles con sus días y horarios y botón para saber como llegar. Además se dispone de un mapa en la parte derecha para poder averiguar rápidamente de cual asistencia uno está más cerca.

### Articulos y servicios.

Si desde la barra principal, clickea en productos, se dirigira a la pagina de productos la cual le desplegara un listado de articulos y servicios ordenados por mas reciente.
![Visitante catalogo](https://github.com/alan1996colo/PortalTuristico/blob/master/data/visitanteCatalogo.png)
Si lo prefiere, puede filtrar o ordenar articulos por distancia o fecha de creacion del anuncio.
En un mapa a la derecha, podra observar claramente, donde se encuentran los comercios que arrojaron la busqueda.

### Cotizador


![Visitante cotizador](https://github.com/alan1996colo/PortalTuristico/blob/master/data/visitanteCotizador.png)
Si se desplaza un poco hacia abajo, podra visualizar completamente un cotizador, que le permitira conocer el valor actual de las monedas mas populares de la region.


### Ver mas
![Producto imagenes](https://github.com/alan1996colo/PortalTuristico/blob/master/data/productoImagenes.png)


Si asi lo desea, podra entrar en uno de los avisos que aparecen listados, para conocer mas detalles de ese producto/servicio , o ver desde el mapa la ubicacion del vendedor.
![Producto en detalle](https://github.com/alan1996colo/PortalTuristico/blob/master/data/productoVistadetalle.png)


### Diseño responsivo
![Producto responsive](https://github.com/alan1996colo/PortalTuristico/blob/master/data/productoresponsive.png)

Tambien nos hemos asegurado de que los usuarios de smartphones no se queden sin la oportunidad de experimentar con este hermoso sistema.

![Producto responsive map](https://github.com/alan1996colo/PortalTuristico/blob/master/data/productoresponsivemap.png)


## [secretaria](#secretaria)

![Personal de secretaria](https://github.com/alan1996colo/PortalTuristico/blob/master/data/psecretaria.png)
En la pantalla principal del personal de secretaría se puede seleccionar si se quiere ingresar un Evento o un Sitio de interés.
![Interfaz](https://github.com/alan1996colo/PortalTuristico/blob/master/data/psinterfaz.png)

Haciendo click en Evento, se aparecerá el formulario para completar, tenga en cuenta que puede crear todos los eventos que quiera utilizando el botón Agregar y luego cuando termine toca el botón Finalizar ingresos. Finalmente se descargará el archivo que contiene todos los eventos nuevos junto con los preexistentes.

![Interfaz](https://github.com/alan1996colo/PortalTuristico/blob/master/data/psinterfaz2.png)
Haciendo click en Sitio de Interés, se aparecerá el formulario para completar, una vez completado se aparecerá otro formulario donde podrá agregar todos los atractivos del sitio que usted quiera y al finalizar tocar el botón Finalizar ingreso de atractivos. Luego de esto, se aparecerá dos opciones, una es agregar otro sitio y otra es finalizar ingresos. Finalmente se descargará el archivo que contiene todos los sitios y atractivos nuevos junto con los preexistentes.

## [comerciante](#comerciante)

Desde la interfaz del comerciante se puede publicar, ver y actualizar productos y servicios.
Lo primero que vera un comerciante al ingresar sera los articulos que tiene publicados y en que estado se encuentran.
![mis articulos](https://github.com/alan1996colo/PortalTuristico/blob/master/data/misArticulos.png)

Si el comerciante quisiera actualizar un articulo, solo debe presionar en el boton Editar, si quiere publicar un nuevo articulo debe presionar el boton "publicar nuevo articulo"
![publicar articulo](https://github.com/alan1996colo/PortalTuristico/blob/master/data/publicarProductoPaso1.png)
Al presionar en publicar nuevo producto, el comerciante se dirigira hacia la pagina de publicacion, que lo ira guiando paso a paso.
![publicar articulo paso2](https://github.com/alan1996colo/PortalTuristico/blob/master/data/publicarProductopaso2.png)

Para la categoria que ha seleccionado, el sistema le mostrara los productos mas populares con sus respectivos precios.

![publicar articulo paso3](https://github.com/alan1996colo/PortalTuristico/blob/master/data/publicarProductoPaso3.png)

Luego de ingresar un nombre y dar click en siguiente, el sistema mostrara 10 productos con nombres similares,a modo de sugerencia ,para que tenga una idea en que valor rondan los precios de dicho articulo.
Recuerde seguir todos los pasos, llenar los campos y presionar publicar.

**Al final del proceso le pedira guardar un archivo "productos.json" recomendamos fuertemente guardarlo en la carpeta src/model/ sobreescribiendo el "productos.json" existente, de esta manera emulamos una base de datos, y podra observar la actualizacion del stock desde el lado del visitante.** 




## [Contribuciones](#contribuciones)

Estamos inmersos en el proceso de aprendizaje del desarrollo de software y, por ende, valoramos enormemente las correcciones como la contribución más valiosa &#9829; en este momento. Agradeceremos donaciones una vez que alcancemos un nivel de habilidad que consideremos profesional.

