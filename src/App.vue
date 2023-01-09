<template>
  <Header />
  <main>
    <SectionDescription />
    <SectionDetails />
    <SectionSlider />
  </main>
  <Footer />
</template>

<script setup lang="ts">
// Components
import Header from '@/components/header/Header.vue';
import SectionDescription from '@/components/product/description/Description.vue';
import SectionDetails from '@/components/product/details/Details.vue';
import SectionSlider from '@/components/product/slider/Slider.vue';
import Footer from '@/components/footer/Footer.vue';
</script>
