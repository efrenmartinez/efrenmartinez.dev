<template>
  <main class="about">
    <h3>Welcome to my digital garden.</h3>
    <p>
      I´m Front End Enginner principally with VueJS, SASS and NodeJS 💚. Comes
      from Queretaro, Mexico. Currently I work in
      <a href="https://marciano.com.mx/" target="_blank">Marciano Studio</a> 🚀,
      a digital agency with clients like Suzuki Mexico, Michelin, AGCO México.
    </p>
    <h3>Experience</h3>
    <p>
      I have had the opportunity to collaborate in
      <a href="https://www.grupoeducare.com/web/" target="_blank"
        >Grupo Educare</a
      >
      like Web developer, company that is dedicated to the realization of
      interactive books, where I develop with PHP, MySQL, Linux, Angular and
      Apache.
    </p>
    <p>
      Mi stack from day to day in creating applications web using
      <a href="https://quasar.dev/" target="_blank">Quasar</a>, VueJS based
      framework, which allows to write code just one time and y deploy like
      application SPA, SSR, PWA, Mobile Apps or Multi-platform Desktop Apps. In
      addition write code CSS, SASS and JavaScript.
    </p>
    <p>
      When I'm not coding, I´m usually playing some video games of my backlog,
      watching series or movies.
    </p>
    <h3>You can find me in:</h3>
    <NxSocialMedia size="40px" />
  </main>
</template>

<script>
/**
 *
 * about Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 */
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
.about {
  margin: 2.5em 0;
  h3 {
    font-family: var(--font-secondary);
    font-size: 2em;
    color: var(--yellow);
  }
  a {
    color: var(--blue-light);
  }
}
</style>
