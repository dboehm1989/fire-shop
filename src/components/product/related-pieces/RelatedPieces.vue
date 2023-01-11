<template>
  <section class="related-pieces hero">
    <div class="related-pieces__body hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <p class="related-pieces__category">Altiplano Collection</p>
            <h2 class="title">Related Pieces</h2>
          </div>

          <BlockSlider class="column is-8" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlockSlider from './block-slider/Slider.vue';
</script>

<style lang="scss" scoped>
.related-pieces {
  color: var(--color-white);
  background: var(--color-black-2);

  &__body {
    padding: 5em 0;
  }
}
</style>
