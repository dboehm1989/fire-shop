<template>
  <section class="desc hero is-medium">
    <div class="hero-body">
      <div class="container">
        <BlockInfo category="Product Details" :product-details="productDetails" />
      </div>
    </div>

    <div class="hero-body">
      <div class="container">
        <BlockInfo category="Specifications" :product-details="productSpecifications" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import BlockInfo from './block-info/BlockInfo.vue';

const productDetails = computed(() => $product.getItem?.productDetails);
const productSpecifications = computed(() => $product.getItem?.productSpecifications);

const $product = useProductStore();
</script>
