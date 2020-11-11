<template>
  <main>
    <BHero title="Welcome a mi blog." />
    <section>
      <div class="container-list">
        <ul class="list__articles">
          <li
            v-for="article of articles"
            :key="article.slug"
            class="list__articles-items"
          >
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >
              <article>
                <h2>{{ article.title }}</h2>
                <aside>
                  <time :datetime="article.createdAt">{{
                    formatDate(article.createdAt)
                  }}</time>
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
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return { articles }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title: 'Welcome a mi blog',
    }
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
        height: 50px;
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
}
</style>
