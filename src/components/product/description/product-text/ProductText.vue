<template>
  <div class="text-block">
    <p class="text-block__category">{{ item?.category }} WATCHES</p>
    <h1 class="text-block__title title">{{ item?.title }}</h1>

    <div class="text-block__box">
      <p class="text-block__price">{{ price?.priceFormatted }}</p>
      <p class="text-block__sku">Watch {{ item?.sku }}</p>
      <p class="text-block__text">{{ item?.shortDescription }}</p>

      <button class="text-block__button button">ADD TO SHOPPING BAG</button>
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
@import './product-text.scss';
</style>
