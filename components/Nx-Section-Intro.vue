<template>
  <div class="Nx-Section-Intro">
    <div class="container-title">
      <h1>👋 Hola!! Soy Efrén Martínez Rodríguez</h1>
      <h2>
        Desarrollador Frontend 🐍 Entusiasta de Python 🎓 Platzi Master
      </h2>
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
}
</script>

<style lang="scss" scoped>
.Nx-Section-Intro {
  display: flex;
  flex-wrap: nowrap;
  height: 200px;

  .container-title {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
