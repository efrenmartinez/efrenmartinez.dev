<template>
  <header>
    <n-link to="/">
      <img
        src="https://res.cloudinary.com/efrenmartinez/image/upload/v1608834240/efrenmartinez.dev/favicon_b9cqkx.png"
        alt="Logotipo Efrén Martínez Rodríguez"
      />
    </n-link>
    <nav>
      <ul>
        <n-link to="/about" title="About">.about</n-link>
        <n-link to="/blog" title="Blog en Español">.blog (es)</n-link>
        <a
          href="/efren_martinez_rodriguez.pdf"
          title="Resume"
          target="_blank"
          rel="noopener noreferrer"
          >.resume</a
        >
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  img {
    height: 80px;
    width: 80px;
    &:hover {
      height: 85px;
      width: 85px;
    }
  }
  nav {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul {
      a {
        text-decoration: none;
        text-transform: lowercase;
        font-weight: var(--font-regular);
        font-size: 1.6em;
        color: var(--gray);
        margin-right: 30px;
        font-family: var(--font-primary);
      }
      .nuxt-link-exact-active {
        color: var(--purple);
      }
    }
  }
  @media screen and (max-width: 360px) {
    & {
      nav {
        ul a {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
