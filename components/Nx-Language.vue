<template>
  <ul>
    <n-link to="/">
      <img src="~/assets/icons/usa.svg" alt="icon usa" />
    </n-link>
    <n-link to="/es"
      ><img src="~/assets/icons/mexico.svg" alt="icon mexico"
    /></n-link>
  </ul>
</template>

<script>
/**
 *
 * NxLanguage Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 */
export default {
  name: 'NxLanguage',
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  a > img {
    width: 27px;
    margin-right: 10px;
  }
}
</style>
