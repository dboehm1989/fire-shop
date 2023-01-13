<template>
  <div class="block-image">
    <div class="preview-images">
      <img
        v-for="(img, idx) in gallery"
        :key="idx"
        class="preview-image"
        :class="{ active: isActive(idx) }"
        :src="`/src/assets/img/thumb_${img.path}`"
        @click="selectedIdx = idx"
      />
    </div>
    <div class="large-image active" :style="backgroundImageStyle" />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';

const $product = useProductStore();
const medias = computed(() => $product.getItem?.medias);
const gallery = computed(() => medias.value?.filter(media => media.targetAttr === 'gallery'));

const selectedIdx = ref(0);
const isActive = (idx: number) => selectedIdx.value === idx;
const selectedImg = computed(() => gallery.value?.find((_, idx) => isActive(idx)));
const backgroundImageStyle = computed(() => `background-image: url(src/assets/img/${selectedImg.value?.path})`);
const publicPath = process.env.BASE_URL;
</script>

<style lang="scss" scoped>
@import './block-image.scss';
</style>
