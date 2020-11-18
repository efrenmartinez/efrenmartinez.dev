<template>
  <main>
    <NxSectionHero>
      <template v-slot:links>
        <h3 class="nx-regular">
          You can find me on
          <a
            href="https://www.linkedin.com/in/efren-martinez-rodriguez/"
            target="_blank"
            title="@efren-martinez-rodriguez"
            rel="noopener noreferrer"
            class="nx-semi-bold nx-pink text-decoration-none"
            >LinkedIn</a
          >,
          <a
            href="https://github.com/efrenmartinez"
            target="_blank"
            title="@efrenmartinez"
            rel="noopener noreferrer"
            class="nx-semi-bold nx-pink text-decoration-none"
            >Github</a
          >
          and
          <a
            href="mailto:developer.emartinez@gmail.com?Subject=🖤 Hello friend"
            target="_blank"
            title="@efrenmartinez"
            rel="noopener noreferrer"
            class="nx-semi-bold nx-pink text-decoration-none"
            >Email</a
          >.
        </h3>
      </template>
    </NxSectionHero>
  </main>
</template>

<script>
export default {
  name: 'Index',
  head() {
    return {
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
