<template>
  <section class="Nx-Section-Hero">
    <div class="container-title">
      <h1>Hi, I´m</h1>
      <h1>Efren Martinez.</h1>
      <h1>A front-end enginner.</h1>
      <h2>
        I´m a front-end enginner based in Queretaro 🇲🇽. Skilled in
        <span class="nx-yellow">Vue.js & Nuxt.js</span>, JavaScript (ES6+), HTML
        & (S)CSS and much more.
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
    margin-top: 60px;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      background: #55e0b0;
      background: -webkit-linear-gradient(right, #55e0b0, #3915d7);
      background: -moz-linear-gradient(right, #55e0b0, #3915d7);
      background: linear-gradient(to left, #55e0b0, #3915d7);
      background-clip: text;
      color: transparent;
      font-family: var(--font-title);
      font-size: 6.2em;
      line-height: 1.3em;
      margin: 0;
      &::selection {
        background: #3915d7;
        color: #fff;
      }
    }
    h2 {
      font-family: var(--font-primary);
      font-size: 2.5em;
      font-weight: 400;
      line-height: 46px;
      margin: 20px 0;
    }
  }
  @media screen and (max-width: 900px) {
    & {
      .container-title {
        h1 {
          font-size: 5.4em;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    & {
      height: auto;
      margin: 40px 0;
      .container-title {
        height: auto;
        h1 {
          font-size: 4.4em;
        }
        h2 {
          font-size: 2.1em;
        }
      }
    }
  }
}
</style>
