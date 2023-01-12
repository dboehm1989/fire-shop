<template>
  <section class="details hero">
    <div class="details__body hero-body">
      <div class="container">
        <BlockDetails type="detail-1" :product-details="productDetails" />
      </div>
    </div>

    <div class="details__body hero-body">
      <div class="container">
        <BlockDetails type="detail-2" :product-details="productSpecifications" />
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
.details {
  &__body {
    padding: 5em 0;
  }
}
</style>
