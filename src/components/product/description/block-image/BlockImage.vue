<template>
  <div class="block-image">
    <div class="preview-images">
      <img
        v-for="(img, idx) in galleryWithFullpath"
        :key="idx"
        class="preview-image"
        :class="{ active: isActive(idx) }"
        :src="img.preview"
        @click="selectedIdx = idx"
      />
    </div>
    <div class="large-image">
      <img :src="selectedImg" alt="Selected Img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoadDescriptionImages } from './use/useLoadDescriptionImages';
const { selectedIdx, galleryWithFullpath, selectedImg, isActive } = useLoadDescriptionImages();
</script>

<style lang="scss" scoped>
@import './block-image.scss';
</style>
