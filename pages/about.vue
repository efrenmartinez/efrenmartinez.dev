<template>
  <main class="about">
    <h1>Welcome to my digital garden.</h1>
    <h3>About Me</h3>
    <p>I love Vue.js 💚</p>
    <p>
      Versatile and creative Front-End engineer with 5+ years of experience
      designing, developing, and managing e-commerce sites and frameworks.
      Specializes in Vue JS, CSS and responsive design. I´m part of
      <a
        href="https://platzi.com/blog/que-es-platzi-master/"
        target="_blank"
        title="@efren-martinez-rodriguez"
        rel="noopener noreferrer"
        class="nx-semi-bold nx-blue text-decoration-none"
        >Platzi Master Program</a
      >.
    </p>
    <p>But here is a little description about myself.</p>
    <ul>
      <li>🙈 My favorite console is Nintendo Switch.</li>
      <li>😁 My favorite OS is Linux even though I used Mac.</li>
      <li>🖼 I wanted to be an illustrator</li>
    </ul>
    <h3>Next Projects in 2021</h3>
    <ul>
      <li>💻 Write blog about programming.</li>
      <li>🕹 Write blog about videogames.</li>
      <li>🎮 Develop a video game.</li>
      <li>🚀 Build a small robot.</li>
    </ul>
  </main>
</template>

<script>
/**
 *
 * about Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 */
export default {
  name: 'About',
  head() {
    return {
      title: 'About Me',
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
          content: 'https://www.efrenmartinez.dev/profile.jpg',
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
          content: 'Foto de perfil.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.about {
  margin: 80px 0;
  h1 {
    font-family: var(--font-title);
  }
  h3 {
    font-family: var(--font-primary);
    font-size: 2.2em;
    color: var(--blue-dark);
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      font-size: 1.5em;
      line-height: 2.3em;
    }
  }
}
</style>
