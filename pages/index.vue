<template>
  <main>
    <NxSectionHero>
      <template v-slot:links>
        <h3>
          You can find me on
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
            href="https://www.linkedin.com/in/efren-martinez-rodriguez/"
            target="_blank"
            title="@efren-martinez-rodriguez"
            rel="noopener noreferrer"
            class="nx-semi-bold nx-pink text-decoration-none"
            >LinkedIn</a
          >.
        </h3>
      </template>
    </NxSectionHero>
  </main>
</template>

<script>
export default {
  name: 'Index',
}
</script>
