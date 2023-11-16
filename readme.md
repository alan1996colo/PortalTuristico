# Portal Turistico
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
  Acceso rapido a la Documentacion:
-  [Requerimientos](https://github.com/alan1996colo/PortalTuristico/blob/master/docs/SRS-Portal-Turistico.pdf)
-  [Casos de uso](https://drive.google.com/file/d/19FAd61mSIlAhghX8Roo4W9CKN9HgQOzS/view?usp=sharing)
-  [Arquitectura](https://drive.google.com/file/d/1UUZjI6-6o-RYY2M_ukrtK4pF-QJOCdZ_/view?usp=sharing)
-  [Modelo conceptual](https://drive.google.com/file/d/116j2FeV5MUKVlBiLlnocm33J7B6JeDU7/view?usp=sharing)


## [Introduccion](#Introduccion)
La Secretaría de Turismo de una ciudad busca promover el turismo mediante la creación de un portal virtual. Este portal conectará a residentes y visitantes con eventos y servicios locales, mejorando la interacción y participación. Funcionalidades clave incluyen la divulgación de actividades, descripción de lugares de interés, registro de comerciantes, comparación de precios, y ubicación de comercios.

## [visitante](#visitante)
![Menu del home](https://github.com/alan1996colo/PortalTuristico/data/menu.png)
Si accedemos a la pagina uiVisitanteHome.html,
Como visitante en la parte superior se encuentran las categorías de mayor interés para el turista.

![Eventos](https://github.com/alan1996colo/PortalTuristico/data/eventos.png)
Haciendo click en Eventos, se encontrará con una lista de ellos detallando la hora y lugar junto con una descripción y costo de entrada, incluso a la derecha se encuentra un calendario donde están marcados los distintos eventos.
![mar de las sirenas](https://github.com/alan1996colo/PortalTuristico/data/marde.png)

Haciendo click en Sitios de interés, se encontrará con los distintos sitios disponibles para visitar, cada uno con una pequeña descripción. Si se hace click en atractivos del lugar colapsará una lista de ellos con una descripción de lo que tratan.

![Sitios de interes](https://github.com/alan1996colo/PortalTuristico/data/sitiosde.png)

Haciendo click en Asistencia, se encontrará con los centros de asistencia tanto fijos como móviles con sus días y horarios y botón para saber como llegar. Además se dispone de un mapa en la parte derecha para poder averiguar rápidamente de cual asistencia uno está más cerca.

## [Uso Secretaria](#secretaria)

![Personal de secretaria](https://github.com/alan1996colo/PortalTuristico/data/psecretaria.png)
En la pantalla principal del personal de secretaría se puede seleccionar si se quiere ingresar un Evento o un Sitio de interés.
![Interfaz](https://github.com/alan1996colo/PortalTuristico/data/psinterfaz.png)

Haciendo click en Evento, se aparecerá el formulario para completar, tenga en cuenta que puede crear todos los eventos que quiera utilizando el botón Agregar y luego cuando termine toca el botón Finalizar ingresos. Finalmente se descargará el archivo que contiene todos los eventos nuevos junto con los preexistentes.

![Interfaz](https://github.com/alan1996colo/PortalTuristico/data/psinterfaz2.png)
Haciendo click en Sitio de Interés, se aparecerá el formulario para completar, una vez completado se aparecerá otro formulario donde podrá agregar todos los atractivos del sitio que usted quiera y al finalizar tocar el botón Finalizar ingreso de atractivos. Luego de esto, se aparecerá dos opciones, una es agregar otro sitio y otra es finalizar ingresos. Finalmente se descargará el archivo que contiene todos los sitios y atractivos nuevos junto con los preexistentes.


