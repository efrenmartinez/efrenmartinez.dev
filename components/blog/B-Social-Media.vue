<template>
  <div class="B-Social-Media">
    <template v-for="(item, i) in CatalogSocialMedia">
      <a
        v-if="!item.disable"
        :key="i"
        :title="item.title"
        :href="item.link"
        :target="item.target"
        >{{ item.name }}</a
      >
    </template>
  </div>
</template>

<script>
/**
 *
 * BSocialMedia Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 */
import CatalogSocialMedia from '@/utils/catalog-social-media.js'
export default {
  name: 'BSocialMedia',
  data() {
    return {
      CatalogSocialMedia,
    }
  },
}
</script>

<style lang="scss" scoped>
.B-Social-Media {
  a {
    margin: 0 5px;
    color: var(--black);
    font-size: 1.4em;
    text-decoration: none;
    &:last-child {
      margin-left: 30px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
