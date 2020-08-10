<template>
  <section>
    <NxSectionIntro />
    <h3>Bienvenido a mi garage digital.</h3>
    <p>
      Soy
      <span class="nx-bold nx-pink">desarrollador frontend</span> principalmente
      con <span class="nx-bold nx-pink">VueJS 💚</span> en la cuidad de
      Querétaro, México. Actualmente trabajo en
      <a href="https://marciano.com.mx/" target="_blank">Marciano Studio</a> 🚀,
      una agencia digital con clientes como Suzuki Mexico, Michelin, AGCO
      México.
    </p>
    <h3>Experiencia</h3>
    <p>
      He tenido la oportunidad de colaborar en
      <a href="https://www.grupoeducare.com/web/" target="_blank"
        >Grupo Educare</a
      >
      como desarrollador web, empresa que se dedica a la realización de libros
      interactivos, en donde realice proyectos con
      <span class="nx-bold nx-pink">PHP, MySQL, Linux</span>.
    </p>
    <p>
      Mi stack de día a día es creando aplicaciones web usando
      <a href="https://quasar.dev/" target="_blank">Quasar</a>, un framework de
      <span class="nx-bold nx-pink">VueJS</span> el cual permite escribir código
      una sola vez y poder desplegarlo como una aplicación SPA, SSR, PWA,
      aplicación movil o como aplicación multiplataforma. Ademas de escribir
      código <span class="nx-bold nx-pink">CSS</span> usando
      <span class="nx-bold nx-pink">SASS</span>.
    </p>
    <p>
      Cuando no estoy desarrollando por lo regular me encuentro leyendo, jugando
      algún videojuego o viendo series o peliculas.
    </p>
    <h3>Puedes encuentrame en:</h3>
    <NxSocialMedia size="40px" />
  </section>
</template>

<script>
import NxSectionIntro from '@/components/Nx-Section-Intro.vue'
import NxSocialMedia from '@/components/Nx-Social-Media.vue'
export default {
  components: {
    NxSocialMedia,
    NxSectionIntro,
  },
}
</script>
