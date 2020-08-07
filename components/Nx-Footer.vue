<template>
  <footer class="Nx-Footer">
    <span>@efrenmartinez © 2020</span>
    <span>Built with Nuxt.js and Netlify</span>
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
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;

  span {
    font-weight: 600;
    line-height: 24px;
    margin: 0 10px;
  }
}
</style>
