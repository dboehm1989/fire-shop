<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="sku in $product.getItem?.relatedProducts" :key="sku">
      <SliderItem :sku="sku" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
// Component
import SliderItem from './SliderItem.vue';
// Carousel
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import { useSliderSettings } from './use/useSlider';
import { useProductStore } from '@/stores/product';
const { settings, breakpoints } = useSliderSettings();

const $product = useProductStore();
</script>

<style lang="scss" scoped>
@import './slider.scss';
</style>
