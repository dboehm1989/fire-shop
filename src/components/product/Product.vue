<template>
  <main>
    <SectionDescription />
    <SectionDetails />
    <SectionSlider />
  </main>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import ProductService from '@/services/productService';
// Components
import SectionDescription from './description/Description.vue';
import SectionDetails from './details/Details.vue';
import SectionSlider from './slider/Slider.vue';
import { storeToRefs } from 'pinia';

onMounted(() => loadProducts());

const product = useProductStore();
const { products } = storeToRefs(product);

async function loadProducts() {
  products.value = await ProductService.getProducts();
}
</script>
