<template>
  <section class="related-pieces hero">
    <div class="related-pieces__body hero-body">
      <div class="container">
        <p class="related-pieces__category">Altiplano Collection</p>
        <h2 class="title">Related Pieces</h2>

        <BlockSlider />
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
  background: var(--bg-black);

  &__body {
    padding: 5em 0;
  }
}
</style>
