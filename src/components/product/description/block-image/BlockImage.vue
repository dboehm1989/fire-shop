<template>
  <div class="block-image">
    <div class="preview-images">
      <img
        v-for="(img, idx) in galleryList"
        :key="idx"
        class="preview-image"
        :class="{ active: isActive(idx) }"
        :src="`/src/assets/img/thumb_${img.path}`"
        @click="selectedIdx = idx"
      />
    </div>
    <div class="large-image">
      <img :src="selectedImgPath" alt="Selected Img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';

const $product = useProductStore();
const galleryList = computed(() => $product.getItem?.medias?.filter(media => media.targetAttr === 'gallery'));

const selectedIdx = ref(0);
const isActive = (idx: number) => selectedIdx.value === idx;
const selectedImg = computed(() => galleryList.value?.find((_, idx) => isActive(idx)));
const selectedImgPath = computed(() => new URL(`/src/assets/img/${selectedImg.value?.path}`, import.meta.url).href);
</script>

<style lang="scss" scoped>
@import './block-image.scss';
</style>
