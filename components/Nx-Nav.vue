<template>
  <header>
    <nav>
      <ul>
        <n-link to="/">Home.js</n-link>
        <n-link to="/about">About.css</n-link>
        <n-link to="/blog">Blog.html</n-link>
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
header {
  height: 80px;
  nav {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul {
      a {
        text-decoration: none;
        font-size: 1.6em;
        color: var(--gray);
        margin-right: 30px;
      }
      .nuxt-link-exact-active {
        color: var(--purple);
      }
    }
  }
}
</style>
