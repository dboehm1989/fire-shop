<template>
  <header>
    <div class="container">
      <BlockTopbar />

      <div class="logo">
        <a href="#" rel="home" class="logolink"><img src="@/assets/logo/logo.png" /></a>
      </div>

      <BlockNavigation />
    </div>
  </header>
</template>

<script setup lang="ts">
import BlockTopbar from './BlockTopbar.vue';
import BlockNavigation from './BlockNavigation.vue';
</script>

<style lang="scss" scoped>
@import './header.scss';
</style>
