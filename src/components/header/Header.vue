<template>
  <header>
    <div class="container">
      <BlockTopbar />
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
