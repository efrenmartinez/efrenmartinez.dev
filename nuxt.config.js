export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Efren Martinez Rodriguez | A front-end enginner.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I´m a front-end enginner based in Queretaro 🇲🇽. Skilled in Vue.js & Nuxt.js, JavaScript (ES6+), HTML & (S)CSS and much more. ',
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
        content: 'Efren Martinez Rodriguez | A front-end enginner.',
      },
      {
        property: 'og:description',
        content:
          'I´m a front-end enginner based in Queretaro 🇲🇽. Skilled in Vue.js & Nuxt.js, JavaScript (ES6+), HTML & (S)CSS and much more. ',
      },
      {
        property: 'og:image',
        content: 'https://www.efrenmartinez.dev/profile.jpg',
      },
      // Twitter
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://www.efrenmartinez.dev/',
      },
      {
        property: 'twitter:title',
        content: 'Efren Martinez Rodriguez | A front-end enginner.',
      },
      {
        property: 'twitter:description',
        content:
          'I´m a front-end enginner based in Queretaro 🇲🇽. Skilled in Vue.js & Nuxt.js, JavaScript (ES6+), HTML & (S)CSS and much more. ',
      },
      {
        property: 'twitter:image',
        content: 'https://www.efrenmartinez.dev/profile.jpg',
      },
      {
        name: 'twitter:creator',
        value: '@efrenmartinezmx',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@1,700&display=swap',
        rel: 'stylesheet',
        defer: true,
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Catamaran&display=swap',
        rel: 'stylesheet',
        defer: true,
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        rel: 'stylesheet',
        defer: true,
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/sitemap'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  sitemap: {
    hostname: 'https://www.efrenmartinez.dev',
    gzip: true,
  },
}
