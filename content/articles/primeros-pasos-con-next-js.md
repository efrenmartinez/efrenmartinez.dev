---
title: Primeros pasos con Next.js
description: Hace pocos días empece a trabajar en un proyecto realizado con NextJS y ahora empecé a estudiar aprender sobre Next.js
author:
  name: Efrén Martínez Rodríguez
  bio:
  github: https://github.com/efrenmartinez
  linkedln: https://www.linkedin.com/in/efren-martinez-rodriguez/
publish: true
tags:
  - next-js
  - javascript
img:
  src: https://res.cloudinary.com/efrenmartinez/image/upload/v1608836120/efrenmartinez.dev/blog/primeros-pasos-con-next-js/thumbs-primeros-pasos-con-next-js_ezt0g0_qo58ce.jpg
  alt: primeros-pasos-con-next-js
---

Como varios sabrán soy un gran entusiasta de todo lo relacionado con VueJS 💚 y no tengo ningún problema con realizar proyectos por sus distintos sabores de VueJS. Pero hace pocos días empecé a trabajar en un proyecto realizado con Next.js, un framework para renderizar nuestras vistas en el lado del servidor (SSR) que trabaja sobre ReactJS, Webpack y Babel. Así que me dí a la tarea de aprender más sobre Next.js y no quedarme atrás con el equipo.😆😂
<br/>

Antes de empezar con NextJS como todo framework tiene sus propias configuraciones por las cuales exigen seguir la estructura de las carpetas y respetar ciertas reglas para no romper el framework.
<br/>

Esto será un pequeño posts de las grandes funcionalidades que ofrece NextJS.

# Instalación de Next.js

Para poder utilizar Next.js es requerido tener instalado Node.js (una versión superior a la v10.13) y NPM. Una vez ubicados en la carpeta donde trabajaremos, hay que tener en cuenta que para instalar NextJS se puede hacer de dos formas:

- Usar su CLI (Interfaz de Línea de Comandos)

> [https://nextjs.org/docs#setup](https://nextjs.org/docs#setup)

- De la forma manual

> [https://nextjs.org/docs#manual-setup](https://nextjs.org/docs#manual-setup)

Yo lo haré de la forma manual. Me gusta saber lo que estoy haciendo. Dejando claro lo anterior. Empecemos.... 😎

- Creamos una carpeta llamada my-first-app-with-next-js y accedemos a ella:

![01-creamos-la-carpeta](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836119/efrenmartinez.dev/blog/primeros-pasos-con-next-js/01-creamos-la-carpeta_h4bwuk_onxxou.png)

- Inicializamos un proyecto de NPM

![02-inicializamos-npm](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836119/efrenmartinez.dev/blog/primeros-pasos-con-next-js/02-inicializamos-npm_majztl_agpzw5.png)

- Agregamos las dependencias **next, react, react-dom**:

![03-instalacion-de-dependencias](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836119/efrenmartinez.dev/blog/primeros-pasos-con-next-js/03-instalacion-de-dependencias_cv3yfu_czsobq.png)

- Vamos a darle un vistazo a nuestro proyecto en el editor

![04-proyecto-en-el-editor](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836119/efrenmartinez.dev/blog/primeros-pasos-con-next-js/04-proyecto-en-el-editor_wuvkon_x6aaa2.png)

🎉🎉🎉 Genial!!! Ya tienes instalado Next.js pero ahora cómo puedo ver nuestro proyecto corriendo. Lo veremos adelante.👇👇

# Configurando Next.js

Una vez realizada la instalación necesitamos de unos pequeños ajustes para correr el proyecto.

- Al momento de inicializar el proyecto con NPM esté va a crear un archivo package.json

![05-script-inicial](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836119/efrenmartinez.dev/blog/primeros-pasos-con-next-js/05-script-inicial_ghfvcn_igwjev.png)

- Vamos a reemplazar los scripts con las siguientes lineas:

![06-script-final](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836120/efrenmartinez.dev/blog/primeros-pasos-con-next-js/06-script-final_tc4y2d_ckwka1.png)

Estos scripts se refieren a las diferentes etapas del desarrollo.

- dev : Corre en modo de desarrollo.
- build : Crea la aplicación para producción.
- start  : Crea la aplicación para correrlo con Nodejs.

Ya casi estamos a punto de correr el proyecto ya casi  🥵👌

Hasta ahora sencillo. ¿No?

# Generando la primera vista

Añadir una vista en Next.js es bastante sencillo solo necesitamos crear una carpeta principal llamada pages, que es la carpeta donde Next.js buscará cada archivos JS, por el cual procesara y renderizada automáticamente. Veamos como funciona:

- Creamos un archivo **index.js** ⇒ **pages/index.js** y agregramos el siguiente código.

```jsx
const Index = () => {
	return <main><h1>Hola, Soy la página Index desde Next JS</h1></main>
}

export default Index;
```

![07-agregamos-el-codigo](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836120/efrenmartinez.dev/blog/primeros-pasos-con-next-js/07-agregamos-el-codigo_agjvib_mhjtld.png)

Ahora pasamos a correr el proyecto en modo desarrollo para ver lo que estamos haciendo 👉👈, por default correrá en el puerto 3000.

![08-correr-el-proyecto](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836120/efrenmartinez.dev/blog/primeros-pasos-con-next-js/08-correr-el-proyecto_n0r3hs_tbyhi1.png)

¡Ahora si! Nos dirigimos al link [http://localhost:3000/](http://localhost:3000/)  en nuestro navegador y deberíamos ver lo siguiente:

![09-navegador](https://res.cloudinary.com/efrenmartinez/image/upload/v1608836120/efrenmartinez.dev/blog/primeros-pasos-con-next-js/09-navegador_cywdl1_at1cqw.png)


Finalmente tenemos nuestra primera página hecha con Next.js.🥳🥳🥳🥳🥳

# Conclusión
Lo que no me gusta de ReactJs es la configuración de las rutas algo que pudiera resultar fácil lo vuelve muy tedioso o al menos lo veo de esa manera por estar trabajando diario con Vuejs. Nextjs viene a facilitar la configuración de las rutas y que solo nos enfoquemos en crear las vistas y componentes de nuestra app. Ademas de poder crear una aplicación como un sitio estático o corriendo en un servidor como SSR. Excelente opción para tu siguiente desarrollo.

Si te gustó o te sirvió no dudes en compartir es gratis.

> Aquí les dejo el link del repositorio para que lo descarguen y jueguen con él un poco [https://github.com/efrenmartinez/my-first-app-with-next-js](https://github.com/efrenmartinez/my-first-app-with-next-js)

Puedes encontrarme en [LinkedIn](https://www.linkedin.com/in/efren-martinez-rodriguez/) y en [GitHub](https://github.com/efrenmartinez).

# Referencias

[Curso de Next.js - Platzi](https://platzi.com/clases/next-2020/)

[Next.js by Vercel - The React Framework](https://nextjs.org/)
