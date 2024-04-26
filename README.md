<div id="top"></div>

# API

Landing de VOX construida con Aspro.


## Index

* [Descargar][descargar]
* [Configuraciones][configuraciones]
* [¿Cómo se corre?][como_se_corre]
* [Deploy (`in progress`)][deploy]
* [Tests][tests]


## Descargar

### Código fuente
```shell
$ git clone git@github.com/vox-app/vox-landing.git
$ cd vox-landing
$ npm i
```

<p align="right">(<a href="#top">ir arriba</a>)</p>


## Configuraciones

Este proyecto cuenta con un archivo `.env.example`. En el mismo, se encuentran las configuraciones mínimas para poder correr dicha landing.

Para que el proyecto levante dichas configuraciones, es necesario correr el siguiente comando,
```shell
$ cp .env.example .env
```

<p align="right">(<a href="#top">ir arriba</a>)</p>


## ¿Cómo se corre?

### Correr

Crear un archivo `.env` y copie las variables de entorno requeridas según el archivo `.env.*` que corresponda. Luego ejecute uno de los siguientes comandos:

```shell
# Desarrollo
npm run dev

# Producción
npm run build && npm start
```

<p align="right">(<a href="#top">ir arriba</a>)</p>

## Tests

Para ver ejemplos más concretos, **LOS INVITO A VER LAS PRUEBAS :)**

### Ejecutar las pruebas unitarias
```shell
npm test
```

<!-- deep links -->
[descargar]: #descargar
[configuraciones]: #configuraciones
[como_se_corre]: #cómo-se-corre
[deploy]: #deploy
[tests]: #tests


Sigamos optimizando.

El nombre de la empresa es: BLÖT VÖX.

Basandote en estos ejemplos:
 * https://www.wix.com/templateses/1733-sporting-goods
 * https://www.wix.com/templateses/2898-ai-company
 * https://www.wix.com/demone2/roy-pratt
 * https://www.wix.com/demone2/functional-studio
 
Utilizando TailwindCSS como styling. Necesito que la landing tenga las siguientes secciones,
* Portada con video institucional (fullsceen) + info general (Servicios centado) + logo (top left en formato texto de tamaño moderado) + menu con atajo a las secciones (top right) (todo superpuesto sobre el video) (el video es https://video.wixstatic.com/video/11062b_9181e09668144a139d3b107a08acd708/1080p/mp4/file.mp4)
* Sobre nosotros (Filosofía) 
* Actividades (Tipos de entrenamiento y deportes) 
* El VOX (Recorrido en fotos y vídeos del gimnasio y sus areas)
* Contacto + Ubicación (map)
* Footer (copyright (center left) + logo redes (center right) (facebook, instagram, tiktok)) (texto blanco)

Todos los textos tienen que estar en color: #2b2b2b
El background tiene que estar en color: #FFFFFF
Los colores disponibles para utilizar y decorar son #234044 y #c11b00.

Las tipografias que podes utilizar con,
 * Nombre de la marca: Monument
 * Titulos: PP Formula
 * Subtitulos + textos: Printvetica

Las imagenes que necesites sacalas de: https://www.istockphoto.com/es/fotos/estilo-de-vida-saludable
Los iconos que necesites sacalos de: https://fontawesome.com

Agreguemos animaciones a las transiciones al scrolear

El sitio completamente responsive

