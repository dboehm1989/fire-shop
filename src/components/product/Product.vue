<template>
  <main>
    <SectionDescription />
    <SectionDetails />
    <SectionSlider />
  </main>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';
// Components
import SectionDescription from './description/Description.vue';
import SectionDetails from './details/Details.vue';
import SectionSlider from './slider/Slider.vue';

onMounted(() => loadProductData());

const $product = useProductStore();

async function loadProductData() {
  await Promise.all([$product.loadProducts(), $product.loadProductPrice()]);
}
</script>
