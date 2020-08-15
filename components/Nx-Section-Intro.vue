<template>
  <div class="Nx-Section-Intro">
    <div class="container-title">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
  </div>
</template>

<script>
/**
 *
 * NxSectionIntro Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 */
export default {
  name: 'NxSectionIntro',
  props: {
    title: {
      type: String,
      default: '#default',
    },
    subtitle: {
      type: String,
      default: '#default',
    },
  },
}
</script>

<style lang="scss" scoped>
.Nx-Section-Intro {
  display: flex;
  flex-wrap: nowrap;
  height: 350px;

  .container-title {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
@media screen and (max-width: 420px) {
  .Nx-Section-Intro {
    height: 400px;

    .container-title {
      width: 100%;
    }
  }
}
</style>
