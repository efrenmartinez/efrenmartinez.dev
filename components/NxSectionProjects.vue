<template>
  <section class="NxSectionProjects">
    <div class="container-projects">
      <h2>What I've been working on</h2>
      <NxProjects :projects="projects" />
    </div>
  </section>
</template>

<script>
/**
 *
 * NxSectionProjects Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 * @copyright 2020, Marciano Studio S.C.
 */
export default {
  name: 'NxSectionProjects',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.NxSectionProjects {
  .container-projects {
    height: auto;
    width: 100%;
    margin: 50px 0;
    h2 {
      color: var(--blue-dark);
      font-family: var(--font-primary);
      font-size: 3em;
      font-weight: 400;
      text-align: center;
    }
  }
  @media screen and (max-width: 900px) {
    & {
      container-projects {
        height: auto;
      }
    }
  }
}
</style>
