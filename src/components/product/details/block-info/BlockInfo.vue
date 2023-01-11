<template>
  <div class="info">
    <div class="info__details">
      <p class="info__category">{{ category }}</p>
      <p class="info__title title">{{ productDetails?.title }}</p>

      {{ productDetails?.data }}
    </div>
    <div class="info__img"></div>
  </div>
</template>

<script setup lang="ts">
import { IProductDetails } from '@/interface/product.i';

defineProps({
  category: {
    required: true,
    type: String,
  },
  productDetails: {
    type: Object as () => IProductDetails,
    default: undefined,
  },
});
</script>
