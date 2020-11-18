<template>
  <footer class="Nx-Footer">
    <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
      <img
        :src="require(`~/assets/icons/built-with.svg`)"
        alt="Built with Nuxt.JS"
      />
    </a>
    <NxSocialMedia :catalog="CatalogSocialMedia" size="35px" />
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
import CatalogSocialMedia from '@/utils/catalog-social-media.js'
export default {
  name: 'NxFooter',
  data() {
    return {
      CatalogSocialMedia,
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 110px;
  }
}
</style>
