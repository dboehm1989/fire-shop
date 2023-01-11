<template>
  <section class="desc hero is-medium">
    <div class="desc__body hero-body">
      <div class="container">
        <div class="desc__content columns">
          <BlockImage class="desc__image column" />
          <BlockText class="desc__text column" />
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
  background: var(--bg-gray);

  &__body {
    padding-left: 0;
    padding-right: 0;
  }

  &__content {
    display: flex;
  }

  &__image {
    min-width: 400px;
    padding: 0;
  }
}
</style>
