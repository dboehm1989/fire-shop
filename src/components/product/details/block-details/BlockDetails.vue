<template>
  <div class="details columns" :class="{ 'is-flex-direction-row-reverse': !isDetail1 }">
    <div class="details__block column is-6">
      <p class="details__category">{{ categoryText }}</p>
      <h2 class="details__title title">{{ productDetails?.title }}</h2>

      <div class="details__items columns is-multiline">
        <div v-for="(item, idx) in productDetails?.data" :key="idx" class="item column is-6">
          <img class="item__img" :src="`src/assets/icon/icon-${item.sortOrder}.png`" alt="Big image" />
          <div class="item__content">
            <h3 class="item__title">{{ item.title }}</h3>
            <p class="item__text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="details__image column is-4">
      <img :src="`/src/assets/img/${productDetailsImg?.path}`" :alt="type" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProductDetails } from '@/interface/product.i';
import { useProductStore } from '@/stores/product';

const props = defineProps({
  type: {
    required: true,
    type: String,
    validation: (v: string) => ['detail-1', 'detail-2'].includes(v),
  },
  productDetails: {
    type: Object as () => IProductDetails,
    default: undefined,
  },
});

const $product = useProductStore();
const medias = computed(() => $product.getItem?.medias);
const productDetailsImg = computed(() => medias.value?.find(media => media.targetAttr === props.type));
const isDetail1 = computed(() => props.type === 'detail-1');
const categoryText = computed(() => (isDetail1.value ? 'Product Details' : 'Specifications'));
</script>

<style lang="scss">
@import './block-details.scss';
</style>
