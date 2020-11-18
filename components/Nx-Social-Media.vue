<template>
  <div class="Nx-Social-Media">
    <template v-for="(item, i) in catalog">
      <a
        v-if="!item.disable"
        :key="i"
        :title="item.title"
        :href="item.link"
        :target="item.target"
      >
        <img
          :src="require(`~/assets/icons/${item.icon}`)"
          :alt="item.name"
          :style="sizeIcon"
        />
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
export default {
  name: 'NxSocialMedia',
  props: {
    size: {
      type: String,
      default: '28px',
    },
    catalog: {
      type: Array,
      required: true,
    },
  },
  computed: {
    sizeIcon() {
      return {
        height: this.size,
        width: this.size,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.Nx-Social-Media {
  height: 30px;
  a {
    margin: 0 5px;
  }
}
</style>
