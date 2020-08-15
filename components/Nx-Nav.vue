<template>
  <nav>
    <ul>
      <n-link to="/">
        <img src="~/assets/icons/usa.svg" alt="icon usa" />
      </n-link>
      <n-link to="/es"
        ><img src="~/assets/icons/mexico.svg" alt="icon mexico"
      /></n-link>
    </ul>
    <NxSocialMedia size="22px" />
  </nav>
</template>

<script>
/**
 *
 * NxNav Component
 *
 * @author emartinez <efren.martinez@marciano.com.mx>
 * @copyright 2020, Marciano Studio S.C.
 */
import NxSocialMedia from '@/components/Nx-Social-Media.vue'
export default {
  name: 'NxNav',
  components: { NxSocialMedia },
}
</script>

<style lang="scss" scoped>
nav {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    padding: 0;
    a > img {
      width: 27px;
      margin-right: 10px;
    }
  }
}
</style>
