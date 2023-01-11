<template>
  <div class="item-box">
    <img :src="`/src/assets/img/img01.png`" />
    <div class="product-info">
      <p>{{ item?.category }}</p>
      <h3>{{ item?.subTitle }}</h3>
      <p>{{ item?.sku }}</p>
      <p>{{ item?.priceFormatted }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';

const props = defineProps({
  sku: {
    type: String,
    default: undefined,
  },
});

const $product = useProductStore();
const item = computed(() => $product.getRelatedPiecesProduct(props.sku));
</script>
