<template>
  <section class="B-Hero">
    <h1>{{ title }}</h1>
    <aside v-if="time">
      <time :datetime="time">{{ formatDate(time) }}</time>
    </aside>
  </section>
</template>

<script>
/**
 *
 * BHero Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 */
export default {
  name: 'BHero',
  props: {
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      default: null,
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es', options)
    },
  },
}
</script>

<style lang="scss" scoped>
.B-Hero {
  h1 {
    font-family: var(--font-primary);
    text-align: center;
    color: var(--black);
    font-size: 3.5em;
    font-weight: 400;
    line-height: 46px;
  }
  aside {
    text-align: center;
    font-size: 1.4em;
  }
}
</style>
