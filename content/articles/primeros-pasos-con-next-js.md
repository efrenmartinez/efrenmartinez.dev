---
title: Primeros pasos con Next JS
description: Hace pocos días empece a trabajar en un proyecto realizado con NextJS y ahora empecé a estudiar aprender sobre NextJS.
author: 
  name: Efrén Martínez Rodríguez
  bio: 
  github: https://github.com/efrenmartinez
  linkedln: https://www.linkedin.com/in/efren-martinez-rodriguez/
publish: false
tags: 
  - next-js
  - javascript
img:
  src: https://res.cloudinary.com/efrenmartinez/image/upload/v1606114529/efrenmartinez.dev-blog/primeros-pasos-con-next-js/thumbs-primeros-pasos-con-next-js_ezt0g0.jpg
  alt: primeros-pasos-con-next-js
---

# Primeros pasos con Next JS

Como varios sabrán soy un gran entusiasta de todo lo relacionado con VueJS 💚 y no tengo ningún problema con realizar proyectos por sus distintos sabores de VueJS. Pero hace pocos días empecé a trabajar en un proyecto realizado con NextJS, un framework para renderizar nuestras vistas en el lado del servidor (SSR) que trabaja sobre ReactJS, Webpack y Babel. Así que me dí a la tarea de aprender más sobre NextJS y no parecer un tonto con mi equipo.😆😂
<br/>

Antes de empezar con NextJS como todo framework tiene sus propias "configuraciones" por las cuales "exigen" seguir la estructura de las carpetas y respetar ciertas "reglas" para no romper el framwork. Esto será un pequeño posts de las grandes funcionalidades que ofrece NextJS. 

# Instalación de NextJS

Para poder utilizar NextJS es requerido tener instalado NodeJS (una versión superior a la 10.13 ) y NPM. Una vez ubicados en el carpeta donde trabajaremos, hay que tener en cuenta que para instalar NextJS se puede hacer de dos formas: 

- Usar su CLI

> [https://nextjs.org/docs#setup](https://nextjs.org/docs#setup)

- De la forma manual

> [https://nextjs.org/docs#manual-setup](https://nextjs.org/docs#manual-setup)

Yo lo haré de la forma manual. Dejando claro lo anterior. Empecemos.... 😎

- Creamos una carpeta llamada my-first-app-with-next-js y accedemos a ella:

![01-creamos-la-carpeta](https://res.cloudinary.com/efrenmartinez/image/upload/v1606110937/efrenmartinez.dev-blog/primeros-pasos-con-next-js/01-creamos-la-carpeta_h4bwuk.png)

- Inicializamos un proyecto de NPM

![02-inicializamos-npm](https://res.cloudinary.com/efrenmartinez/image/upload/v1606110937/efrenmartinez.dev-blog/primeros-pasos-con-next-js/02-inicializamos-npm_majztl.png)

- Agregamos las dependencias next, react, react-dom

![03-instalacion-de-dependencias](https://res.cloudinary.com/efrenmartinez/image/upload/v1606110937/efrenmartinez.dev-blog/primeros-pasos-con-next-js/03-instalacion-de-dependencias_cv3yfu.png)

- Vamos a darle un vistazo a nuestro proyecto en el editor

![04-proyecto-en-el-editor](https://res.cloudinary.com/efrenmartinez/image/upload/v1606110937/efrenmartinez.dev-blog/primeros-pasos-con-next-js/04-proyecto-en-el-editor_wuvkon.png)

🎉🎉🎉 Genial!!!  ya tienes instalado NextJS pero ahora cómo puedo ver nuestro proyecto corriendo.

# Configurando NextJS

Una vez realizado la instalación necesitamos de unos pequeños ajustes para correr el proyecto.

- Al momento de inicializar el proyecto con NPM esté va a crear un archivo package.json

![05-script-inicial](https://res.cloudinary.com/efrenmartinez/image/upload/v1606110937/efrenmartinez.dev-blog/primeros-pasos-con-next-js/05-script-inicial_ghfvcn.png)

- Vamos a reemplazar los scripts con las siguientes lineas:

![06-script-final](https://res.cloudinary.com/efrenmartinez/image/upload/v1606110937/efrenmartinez.dev-blog/primeros-pasos-con-next-js/06-script-final_tc4y2d.png)

Estos scripts se refieren a las diferentes etapas del desarrollo.

- dev : Corre en modo de desarrollo.
- build : Crea la aplicación para producción.
- start  : Crea la aplicación para correrlo con Nodejs.

A este punto estamos a punto de correr el proyecto ya casi  🥵👌

Hasta ahora sencillo. ¿No?

# Generando la primera vista

Añadir una vista en NextJS es bastante sencillo solo necesitamos crear una carpeta principal llamado pages, que es la carpeta donde NextJS buscará cada archivos JS, lo cual lo procesara y renderizada automaticamente. Veamos como funciona:

- Creamos un archivo **index.js** ⇒ **pages/index.js** y agregramos el siguiente código.

```jsx
const Index = () => {
	return <main><h1>Hola, Soy la página Index desde Next JS</h1></main>
}

export default Index;
```

# Referencias

[Curso de Next.js - Platzi](https://platzi.com/clases/next-2020/)

[Next.js by Vercel - The React Framework](https://nextjs.org/)