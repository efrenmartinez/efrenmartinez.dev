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
      <slot name="custom"></slot>
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
  min-height: 450px;
  .container-title {
    padding: 40px;
    width: 100%;
    h1 {
      color: var(--blue-light);
      font-family: var(--font-title);
      font-size: 6.4em;
      letter-spacing: 3px;
      line-height: 1.2em;
      margin: 0;
    }
    h2 {
      font-family: var(--font-secondary);
      font-size: 2em;
      font-weight: 400;
      line-height: 40px;
    }
  }
  @media screen and (max-width: 900px) {
    & {
      .container-title {
        padding: 20px;
        h1 {
          font-size: 5.4em;
        }
      }
    }
  }
}
</style>
