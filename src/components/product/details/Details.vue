<template>
  <section class="desc hero">
    <div class="hero-body">
      <div class="container">
        <BlockDetails type="product-detail" :product-details="productDetails" />
      </div>
    </div>

    <div class="hero-body">
      <div class="container">
        <BlockDetails type="specification" :product-details="productSpecifications" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import BlockDetails from './block-details/BlockDetails.vue';

const productDetails = computed(() => $product.getItem?.productDetails);
const productSpecifications = computed(() => $product.getItem?.productSpecifications);

const $product = useProductStore();
</script>
