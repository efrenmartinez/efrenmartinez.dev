<template>
  <header>
    <nav>
      <n-link to="/" style="font-size: 2em">Efren Martinez</n-link>
      <ul>
        <n-link to="about" style="font-size: 1.5em">About</n-link>
      </ul>
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
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
