<template>
  <div class="NxProjects">
    <template v-for="(project, i) in projects">
      <div
        :key="i"
        class="NxProjects-items"
        :style="{ 'background-color': project.background }"
      >
        <a :href="project.url" target="_blank" rel="noopener noreferrer">
          <img :src="project.img.src" :alt="project.img.alt" />
        </a>
      </div>
    </template>
  </div>
</template>

<script>
/**
 *
 * NxProjects Component
 *
 * @author efrenmartinez <developer.emartinez@gmail.com>
 * @copyright 2020, Marciano Studio S.C.
 */
export default {
  name: 'NxProjects',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.NxProjects {
  column-gap: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  row-gap: 15px;
  width: 100%;
  &-items {
    align-items: center;
    border-radius: 4px;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 40%;
    a {
      width: 300px;
      img {
        height: 550px;
        width: 100%;
        border-radius: 4px;
        transition: 1s ease;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px;
        &:hover {
          transform: scale(0.95);
          transition: 1s ease;
        }
      }
    }
  }
  // @media screen and (max-width: 900px) {
  //   & {
  //     height: auto;
  //     flex-direction: column;
  //     row-gap: 20px;
  //     &-items {
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }
  // }
}
</style>
