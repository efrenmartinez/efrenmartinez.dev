<template>
  <div class="B-Social-Media">
    <template v-for="(item, i) in catalog">
      <a
        v-if="!item.disable"
        :key="i"
        :title="item.title"
        :href="item.link"
        :target="item.target"
        rel="noopener noreferrer"
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
export default {
  name: 'BSocialMedia',
  props: {
    catalog: {
      type: Array,
      required: true,
    },
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
