<template>
  <div class="item">
    <img class="item__image" :src="`/src/assets/img/${item?.imgPath}`" />
    <div class="item__content">
      <p class="item__category">{{ item?.category }}</p>
      <h3 class="item__title">{{ item?.subTitle }}</h3>
      <p class="item__sku">{{ item?.sku }}</p>
      <p class="item__price">{{ item?.priceFormatted }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IRelatedPieces } from '@/interface/product.i';

defineProps({
  item: {
    type: Object as () => IRelatedPieces,
    default: undefined,
  },
});
</script>
