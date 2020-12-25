<template>
  <main>
    <BHero title="Welcome a mi blog" />
    <section>
      <div class="container-list">
        <ul class="list__articles">
          <li
            v-for="article of articles"
            :key="article.slug"
            class="list__articles-items"
          >
            <NuxtLink
              v-if="article.publish"
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >
              <article>
                <h2>{{ article.title }}</h2>
                <aside>
                  <time :datetime="article.date">{{ article.date }}</time>
                </aside>
              </article>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
/**
 *
 * index Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 */
export default {
  name: 'Index',
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['publish', 'title', 'slug', 'date'])
      .sortBy('date', 'desc')
      .fetch()
    return { articles }
  },
  head() {
    return {
      title: 'Welcome a mi blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'I´m a front-end enginner based in Querétaro 🇲🇽. Skilled in Vue.js & Nuxt.js, JavaScript (ES6+), HTML & (S)CSS and much more.',
        },
        // Open Graph / facebook
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://www.efrenmartinez.dev/',
        },
        {
          property: 'og:title',
          content: 'Efrén Martínez Rodríguez | A front-end enginner.',
        },
        {
          property: 'og:description',
          content:
            'I´m a front-end enginner based in Queretaro 🇲🇽. Skilled in Vue.js & Nuxt.js, JavaScript (ES6+), HTML & (S)CSS and much more.',
        },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/efrenmartinez/image/upload/v1608836316/efrenmartinez.dev/profile_iwlcpr.jpg',
        },
        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:url',
          content: 'https://www.efrenmartinez.dev/',
        },
        {
          name: 'twitter:title',
          content: 'Efrén Martínez Rodríguez | A front-end enginner.',
        },
        {
          name: 'twitter:description',
          content:
            'I´m a front-end enginner based in Queretaro 🇲🇽. Skilled in Vue.js & Nuxt.js, JavaScript (ES6+), HTML & (S)CSS and much more.',
        },
        {
          name: 'twitter:image',
          content:
            'https://res.cloudinary.com/efrenmartinez/image/upload/v1608836316/efrenmartinez.dev/profile_iwlcpr.jpg',
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
          content: 'Foto de perfil.',
        },
      ],
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  min-height: 550px;
  .container-list {
    width: 650px;
    margin: 0 auto;
    .list__articles {
      padding: 0;
      list-style: none;
      &-items {
        width: 100%;
        a {
          text-decoration: none;
          color: var(--gray-light);

          &:hover {
            color: var(--pink);
          }

          article {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;
            aside {
              font-size: 1.4em;
            }
            &:hover {
              border: 1px solid var(--pink);
              border-radius: 4px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    & {
      .container-list {
        width: 100%;
        margin-top: 30px;
      }
    }
  }
}
</style>
