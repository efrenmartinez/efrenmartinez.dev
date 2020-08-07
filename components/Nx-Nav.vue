<template>
  <nav>
    <NxSocialMedia />
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
}
</style>
