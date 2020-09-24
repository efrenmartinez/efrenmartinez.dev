<template>
  <footer class="Nx-Footer">
    <a href="https://nuxtjs.org/" target="_blank">
      <img
        :src="require(`~/assets/icons/built-with.svg`)"
        alt="Built with Nuxt.JS"
      />
    </a>
    <a href="https://teenyicons.com/" target="_blank">Icons by @teenyicons</a>
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
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 14px;

  img {
    width: 100px;
  }
}
</style>
