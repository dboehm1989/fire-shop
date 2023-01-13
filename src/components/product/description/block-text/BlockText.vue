<template>
  <div class="block-text">
    <p class="block-text__category">{{ item?.category }} WATCHES</p>
    <h1 class="block-text__title">{{ item?.title }}</h1>

    <div class="block-text__box">
      <p class="block-text__price">{{ price?.priceFormatted }}</p>
      <p class="block-text__sku">Watch {{ item?.sku }}</p>
      <p class="block-text__text">{{ item?.shortDescription }}</p>

      <button class="block-text__button button">ADD TO SHOPPING BAG</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';

const $product = useProductStore();
const item = computed(() => $product.getItem);
const price = computed(() => $product.getPrice);
</script>

<style lang="scss">
@import './block-text.scss';
</style>
