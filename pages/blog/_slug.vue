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
        // Open Graph / facebook
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: `https://efrenmartinez.dev/blog/${this.article.slug}`,
        },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          property: 'og:description',
          content: this.article.description,
        },
        {
          property: 'og:image',
          content: 'https://www.efrenmartinez.dev/profile.jpg',
        },
        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:url',
          content: `https://efrenmartinez.dev/blog/${this.article.slug}`,
        },
        {
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          name: 'twitter:description',
          content: this.article.description,
        },
        {
          name: 'twitter:image',
          content: 'https://www.efrenmartinez.dev/profile.jpg',
        },
        {
          name: 'twitter:creator',
          content: '@efrenmartinezmx',
        },
        {
          name: 'twitter:site',
          content: '@efrenmartinezmx',
        },
        {
          name: 'twitter:image:alt',
          content: this.article.title,
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
