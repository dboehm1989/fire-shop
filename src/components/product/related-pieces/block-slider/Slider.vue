<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="(item, idx) of $product.getSortedRelatedPieces('max')" :key="idx">
      <div class="item">
        <div class="item__wrapper">
          <img class="item__image" :src="`/src/assets/img/${item?.imgPath}`" />
          <div class="item__content">
            <p class="item__category">{{ item?.category }}</p>
            <h3 class="item__title title">{{ item?.subTitle }}</h3>
            <p class="item__sku">Watch {{ item?.sku }}</p>
            <p class="item__price">{{ item?.priceFormatted }}</p>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { useSliderOptions } from './use/useSlider';
import { useProductStore } from '@/stores/product';

const $product = useProductStore();
const { settings, breakpoints } = useSliderOptions();
</script>

<style lang="scss" scoped>
@import './slider.scss';
</style>
