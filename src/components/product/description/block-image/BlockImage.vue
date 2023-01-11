<template>
  <div class="block-image">
    <div class="preview-images">
      <img
        v-for="img in imgs"
        :key="img.id"
        class="preview-image"
        :class="{ active: isActive(img.id) }"
        :alt="img.name"
        :src="`/src/assets/img/${img.preview}`"
        @click="selectedID = img.id"
      />
    </div>
    <div class="large-image active" :style="backgroundImageStyle" />
  </div>
</template>

<script setup lang="ts">
const imgs = [
  { id: 1, name: 'Ultimate Image 1', preview: 'thumb_ultimate.png', original: 'ultimate.png' },
  { id: 2, name: 'Ultimate Image 2', preview: 'thumb_ultimate-01.png', original: 'ultimate-01.png' },
  { id: 3, name: 'Ultimate Image 3', preview: 'thumb_ultimate-02.png', original: 'ultimate-02.png' },
];

const selectedID = ref(1);
const isActive = (id: number) => selectedID.value === id;
const selectedImg = computed(() => imgs.find(img => isActive(img.id)));
const backgroundImageStyle = computed(() => `background-image: url(src/assets/img/${selectedImg.value?.original})`);
</script>

<style lang="scss" scoped>
@import './block-image.scss';
</style>
