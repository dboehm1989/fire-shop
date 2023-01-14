<template>
  <div class="details columns" :class="type">
    <div class="details__wrapper column is-8">
      <div class="details__items">
        <div class="details__headline">
          <p class="details__category">{{ category }}</p>
          <h2 class="details__title">{{ productDetails?.title }}</h2>
        </div>
        <div class="columns is-multiline">
          <div v-for="(item, idx) in productDetails?.data" :key="idx" class="item column is-6">
            <div class="item__wrapper">
              <div class="columns">
                <div class="column is-3">
                  <img class="item__image" :src="`/src/assets/icon/icon-${item.sortOrder}.png`" :alt="type" />
                </div>
                <div class="item__content column is-9">
                  <h3 class="item__title">{{ item.title }}</h3>
                  <p class="item__text">{{ item.text }}</p>
                </div>
              </div>
              <hr class="item__divider" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="column is-4">
      <div class="details__image">
        <img :src="detailsImgSrc" :alt="type" />
      </div>
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
  category: {
    required: true,
    type: String,
  },
  productDetails: {
    type: Object as () => IProductDetails,
    default: undefined,
  },
});

const $product = useProductStore();
const detailsImg = computed(() => $product.getItem?.medias?.find(media => media.targetAttr === props.type)?.path);
const detailsImgSrc = computed(() => new URL(`/src/assets/img/${detailsImg.value}`, import.meta.url).href);
</script>

<style lang="scss" scoped>
@import './block-details.scss';
</style>
