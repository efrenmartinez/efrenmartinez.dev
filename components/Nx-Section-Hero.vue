<template>
  <section class="Nx-Section-Hero">
    <div class="container-title">
      <h1>Hi, I´m Efren Martinez.</h1>
      <h1>A front-end enginner.</h1>
      <h2>
        I´m a front-end enginner based in Queretaro 🇲🇽. Skilled in
        <span class="nx-semi-bold nx-yellow">Vue.js & Nuxt.js</span>, JavaScript
        (ES6+), HTML & (S)CSS and much more.
      </h2>
      <slot name="links"></slot>
    </div>
  </section>
</template>

<script>
/**
 *
 * NxSectionHero Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 */
export default {
  name: 'NxSectionHero',
}
</script>

<style lang="scss" scoped>
.Nx-Section-Hero {
  .container-title {
    padding: 40px;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      color: var(--blue);
      font-family: var(--font-title);
      font-size: 7.4em;
      letter-spacing: 3px;
      line-height: 1em;
      margin: 0;
      text-shadow: 1px -1px 3px rgb(150, 150, 150);
    }
    h2 {
      font-family: var(--font-primary);
      font-size: 2.5em;
      font-weight: 400;
      line-height: 46px;
    }
  }
  @media screen and (max-width: 900px) {
    & {
      .container-title {
        height: 80vh;
        padding: 20px;
        h1 {
          font-size: 5.4em;
        }
      }
    }
  }
}
</style>
