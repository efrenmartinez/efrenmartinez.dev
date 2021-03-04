---
title: ¿Cómo hacer un menú responsivo?
description: Hace unos meses atrás tuve una prueba técnica que se trataba de una landing page con un banner principal, un carrousel de productos y el footer, hasta ahí sin problemas pero el diseño implicaba hace un menú responsivo el cual se me complico hacerlo
author:
  name: Efrén Martínez Rodríguez
  bio:
  github: https://github.com/efrenmartinez
  linkedln: https://www.linkedin.com/in/efren-martinez-rodriguez/
publish: true
tags:
  - html
  - css
img:
  src: https://res.cloudinary.com/efrenmartinez/image/upload/v1608836120/efrenmartinez.dev/blog/primeros-pasos-con-next-js/thumbs-primeros-pasos-con-next-js_ezt0g0_qo58ce.jpg
  alt: como-crear-un-menu-responsivo
date: 03 de marzo de 2021
order: 4
---

# Introducción

Hace unos meses atrás tuve una prueba técnica que se trataba de una landing page con un banner principal, un carrousel de productos y el footer, hasta ahí sin problemas pero el diseño implicaba hace un menú responsivo el cual se me complico hacerlo ☹️.

La prueba la realice solo con HTML, SASS para compilarlo a CSS, JavaScript y lo desplegué en GitHub Pages.

> Si deseas ver el resultado de la prueba está disponible en [https://github.com/efrenmartinez/prueba-getmore](https://github.com/efrenmartinez/prueba-getmore)

Así que me di a la tarea de investigar como hacerlo y realizar un pequeño tutorial: 🎉🎉🎉

Lo que haremos será crear el menú desde cero utilizando HTML, CSS. Estoy utilizando Windows para este tutorial.

## Estructura básica

Para iniciar necesitamos crear un archivo HTML que se llame index.html.

![1. Creamos el archivo HTML](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836119/efrenmartinez.dev/blog/como-hacer-un-menu-responsivo/1-crear-un-archivo_obt391_p23xdg.jpg)

Lo primero que vamos a hacer es agregar el snippet de código al archivo index.html.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cómo crear un menu responsivo</title>
</head>
<body>
  <!-- ESTRUCTURA BÁSICA DEL HTML -->
</body>
</html>
```

Necesitamos utilizar la [etiqueta semántica nav]([https://developer.mozilla.org/es/docs/Web/HTML/Elemento/nav](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/nav)) , que se utiliza cuando queremos definir un menú de navegación en su interior. A continuación agregamos los elementos del menú  como una lista no ordenada **ul,** con la clases **list__links:**

```html
<body>
	<nav>
	  <ul class="list__links">
	    <li><a href="#" class="list__links-active">Inicio</a></li>
	    <li><a href="#">Acerca</a></li>
	    <li><a href="#">Historia</a></li>
	    <li><a href="#">Contacto</a></li>
	  </ul>
	</nav>
</body>
```

Agregamos los siguientes estilos necesarios para obtener un menú mas representable:

```html
</head>
	<style>
	    body {
	      font-family: 'Poppins', sans-serif;
	    }
	    nav {
	      display: flex;
	      justify-content: space-between;
	      margin-left: 172px;
	    }
	    nav .list__links {
	      padding-left: 0;
	    }
	    nav .list__links li {
	      display: inline;
	      margin-right: 60px;
	    }
	    nav .list__links li a {
	      font-size: 16px;
	      letter-spacing: 1.4px;
	      color: rgb(11, 90, 238);
	      text-decoration: none;
	    }
	    nav .list__links-active {
	      font-weight: bold;
	    }
	  </style>
</head>
```

Este es el resultado hasta ahora:

![2.Resultado hasta ahora](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836119/efrenmartinez.dev/blog/como-hacer-un-menu-responsivo/2-estructura-basica_wcbpyx_jww1ef.jpg)

## Creación del menú responsivo

Hemos llegado a la hora de la verdad 😄, vamos agregar la funcionalidad del menú responsivo, primero necesitamos agregar un segundo menú. El primer menú va ser para pantallas grandes y el segundo menú para pantallas pequeñas.

```html
<body>
  <!-- El menú anterior -->
  <nav class="list__movil">
    <i class="fa fa-bars" aria-hidden="true"></i>
  </nav>
</body>
```

¿Y para qué queremos dos menús? Bueno lo queremos de esa manera para poder desaparecer uno y aparecer otro dependiendo del ancho de la pantalla. Para poder realizar lo anterior se debe utilizar **medias queries**.

A continuación vamos a agregar una media query, que cuando el ancho de la pantalla sea menor a 850px, va ocultar el primer menú y aparece el segundo menú.

```css
  @media screen and (max-width: 850px) {
    .list__desktop {
      display: none;
    }
    .list__movil {
      display: flex;
    }
  }
```

![3.Menú para pantallas pequeñas](https://res.cloudinary.com/efrenmartinez/image/upload/v1609820550/efrenmartinez.dev/blog/como-hacer-un-menu-responsivo/3-menu-movil_inhmwz.jpg)

Después vamos a agregar otra media query, para cuando el ancho de la pantalla sea mayor a 850px, va ocultar el segundo menú y aparece el primer menú.

```css
  @media screen and (min-width: 850px) {
    .list__desktop {
      display: flex;
    }
    .list__movil {
      display: none;
    }
  }
```

> *Aquí les dejo el link del repositorio para que lo descarguen y jueguen con él un poco [*https://github.com/efrenmartinez/example-menu-responsive*](https://github.com/efrenmartinez/example-menu-responsive)*

Puedes encontrarme en [LinkedIn](https://www.linkedin.com/in/efren-martinez-rodriguez/) y en [GitHub](https://github.com/efrenmartinez).
