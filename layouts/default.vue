<template>
  <div class="container">
    <NxNav />
    <Nuxt />
    <NxFooter :media="media" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      media: [],
    }
  },
  async fetch() {
    this.media = await this.$content('media').where({ disable: true }).fetch()
  },
}
</script>
