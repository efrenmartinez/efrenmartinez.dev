<template>
  <main class="_slug">
    <BHero :title="article.title" :time="article.createdAt" />
    <nuxt-content :document="article" />
  </main>
</template>

<script>
/**
 *
 * Slug Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 */
export default {
  name: 'Slug',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>

<style>
main {
  min-height: 550px;
}
.nuxt-content :is(h1, h2, h3, h4, h5, h6) {
  color: var(--black);
}
.nuxt-content p {
  color: var(--black);
}
.nuxt-content span {
  font-size: 1.2em;
  color: var(--black);
}
</style>
