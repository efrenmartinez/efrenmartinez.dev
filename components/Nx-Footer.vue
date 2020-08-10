<template>
  <footer class="Nx-Footer">
    <span class="nx-semibold">efrenmartinez © 2020</span>
    <a href="https://nuxtjs.org/" target="_blank">
      <img
        :src="require(`~/assets/icons/built-with.svg`)"
        alt="Built with Nuxt.JS"
      />
    </a>
  </footer>
</template>

<script>
/**
 *
 * NxFooter Component
 *
 * @author emartinez <efren.martinez@marciano.com.mx>
 * @copyright 2020, Marciano Studio S.C.
 */
export default {
  name: 'NxFooter',
}
</script>

<style lang="scss" scoped>
footer {
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  span {
    margin: 10px 0;
  }

  img {
    width: 100px;
  }
}
</style>
