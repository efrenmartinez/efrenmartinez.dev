<template>
  <header>
    <nav>
      <ul>
        <n-link to="/" title="Home">HOME</n-link>
        <n-link to="/about" title="About">ABOUT</n-link>
        <n-link to="/blog" title="Blog en Español">BLOG (ES)</n-link>
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
  width: 100%;
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
  @media screen and (max-width: 360px) {
    & {
      nav {
        justify-content: flex-start;
        ul a {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
