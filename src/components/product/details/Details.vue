<template>
  <section class="details hero">
    <div class="details__body details__body--1 hero-body">
      <div class="container">
        <BlockDetails type="detail-1" category="Product Details" :product-details="productDetails" />
      </div>
    </div>

    <div class="details__body details__body--2 hero-body">
      <div class="container">
        <BlockDetails type="detail-2" category="Specifications" :product-details="productSpecifications" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import BlockDetails from './block-details/BlockDetails.vue';

const $product = useProductStore();
const productDetails = computed(() => $product.getItem?.productDetails);
const productSpecifications = computed(() => $product.getItem?.productSpecifications);
</script>

<style lang="scss" scoped>
@import './details.scss';
</style>
