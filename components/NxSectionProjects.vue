<template>
  <section class="NxSectionProjects">
    <div class="container-projects">
      <h2>What I've been working on</h2>
      <NxProjects :projects="CatalogProject" />
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
import CatalogProject from '@/utils/catalog-projects.js'
export default {
  name: 'NxSectionProjects',
  data() {
    return {
      CatalogProject,
    }
  },
}
</script>

<style lang="scss" scoped>
.NxSectionProjects {
  .container-projects {
    min-height: 700px;
    width: 100%;
    margin: 50px 0;
    h2 {
      color: var(--blue-dark);
      font-family: var(--font-primary);
      font-size: 3.5em;
      font-weight: 400;
      text-align: center;
    }
  }
  @media screen and (max-width: 800px) {
    & {
      container-projects {
        height: auto;
      }
    }
  }
}
</style>
