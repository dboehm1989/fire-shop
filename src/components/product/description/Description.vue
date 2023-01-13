<template>
  <section class="desc hero is-medium">
    <div class="desc__body hero-body">
      <div class="container">
        <div class="desc__content columns">
          <BlockImage class="desc__image column is-6" />
          <BlockText class="desc__text column is-6" />
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
@import './description.scss';
</style>
