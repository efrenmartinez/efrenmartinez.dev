<template>
  <div class="Nx-Social-Media">
    <template v-for="(item, i) in SocialMedia">
      <a v-if="!item.disable" :key="i" :href="item.link" :target="item.target">
        <img :src="require(`~/assets/icons/${item.icon}`)" />
      </a>
    </template>
  </div>
</template>

<script>
/**
 *
 * NxSocialMedia Component
 *
 * @author emartinez <efren.martinez@marciano.com.mx>
 * @copyright 2020, Marciano Studio S.C.
 */
import SocialMedia from '@/utils/social-media.js'
export default {
  name: 'NxSocialMedia',
  data() {
    return {
      SocialMedia,
    }
  },
}
</script>

<style lang="scss" scoped>
.Nx-Social-Media {
  height: 30px;
  a {
    margin: 0 5px;
    img {
      height: 28px;
      width: 28px;
    }
  }
}
</style>
