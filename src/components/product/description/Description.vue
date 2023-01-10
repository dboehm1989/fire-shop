<template>
  <section class="desc hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="desc__content">
          <ProductImage class="desc__image" />
          <ProductText class="desc__text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductImage from './product-image/ProductImage.vue';
import ProductText from './product-text/ProductText.vue';
</script>

<style lang="scss" scope>
.desc {
  background: var(--gray);

  &__content {
    display: flex;
  }

  &__image {
    width: 50%;
    min-width: 400px;
  }

  &__text {
    width: 50%;
  }
}
</style>
