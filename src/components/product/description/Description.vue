<template>
  <section class="desc hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="desc__content">
          <BlockImage class="desc__image" />
          <BlockText class="desc__text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlockImage from './block-image/BlockImage.vue';
import BlockText from './block-text/BlockText.vue';
</script>

<style lang="scss" scoped>
.desc {
  background: var(--gray);

  &__content {
    display: flex;
  }

  &__image {
    width: 50%;
    min-width: 400px;
  }

  &__text {
    width: 50%;
  }
}
</style>
