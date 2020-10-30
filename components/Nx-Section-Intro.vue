<template>
  <section class="Nx-Section-Intro">
    <div class="container-title">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <NxSocialMedia size="30px" />
    </div>
  </section>
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
  height: 450px;

  .container-title {
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}
@media screen and (max-width: 900px) {
  .Nx-Section-Intro {
    padding: 0 20px;
  }
}
</style>
