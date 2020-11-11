<template>
  <main class="about">
    <h1>Welcome to my digital garden.</h1>
    <h3>About Me</h3>
    <p>I love Vue.js 💚</p>
    <p>But here is a little description about myself.</p>
    <ul>
      <li>
        🙈 My favorite console is Nintendo Switch but have Xbox One and
        Playstation 4.
      </li>
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
    }
  },
}
</script>

<style lang="scss" scoped>
.about {
  margin: 80px 0;
  h1 {
    font-family: var(--font-secondary);
  }
  h3 {
    font-family: var(--font-secondary);
    font-size: 2.2em;
    color: var(--yellow);
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
