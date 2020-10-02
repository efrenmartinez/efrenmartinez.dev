<template>
  <header>
    <nav>
      <NxLanguage />
      <NxSocialMedia size="22px" />
    </nav>
  </header>
</template>

<script>
/**
 *
 * NxNav Component
 *
 * @author emartinez <efren.martinez@marciano.com.mx>
 * @copyright 2020, Marciano Studio S.C.
 */
export default {
  name: 'NxNav',
}
</script>

<style lang="scss" scoped>
nav {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
