<template>
  <main>
    <div v-if="article.img.src" class="img-container">
      <img :src="article.img.src" :alt="article.img.alt" />
    </div>
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

<style lang="scss">
main {
  min-height: 550px;
  .img-container {
    height: 300px;
    width: 100%;
    text-align: center;
    img {
      height: 300px;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 15px;
    }
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
  .nuxt-content blockquote {
    color: #666666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em #ee2c5a solid;
  }
  .nuxt-content a {
    color: var(--pink);
    text-decoration: none;
  }
  .nuxt-content ul,
  ol {
    margin: 1em 0;
    padding: 0;
    list-style: square;
    line-height: 40px;
    li {
      font-size: 1.5em;
    }
  }
}
@media screen and (max-width: 900px) {
  main {
    .img-container {
      margin-bottom: 30px;
    }
    .nuxt-content-container {
      margin: 20px 0;
    }
  }
}
</style>
