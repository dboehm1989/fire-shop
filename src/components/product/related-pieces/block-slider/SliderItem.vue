<template>
  <div class="item-box">
    <img src="@/assets/img/img01.png" width="300px" height="300px" />
    <div class="product-info">
      <h3>Title</h3>
      <p>Category</p>
      <p>SKU</p>
      <p>Preis</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProductPrice } from '@/interface/product.i';

defineProps({
  item: {
    type: Object as () => IProductPrice,
    default: undefined,
  },
});
</script>
