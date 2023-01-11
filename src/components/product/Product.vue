<template>
  <main>
    <SectionDescription />
    <SectionDetails />
    <SectionRelatedPieces />
  </main>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';
// Components
import SectionDescription from './description/Description.vue';
import SectionDetails from './details/Details.vue';
import SectionRelatedPieces from './related-pieces/RelatedPieces.vue';

onMounted(() => loadProductData());

const $product = useProductStore();

async function loadProductData() {
  await Promise.all([$product.loadProducts(), $product.loadProductPrice()]);
}
</script>
