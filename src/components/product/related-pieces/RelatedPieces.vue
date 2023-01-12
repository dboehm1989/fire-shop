<template>
  <section class="slider hero">
    <div class="slider__body hero-body">
      <div class="container">
        <div class="columns">
          <div class="description column is-3">
            <p class="description__category">Altiplano Collection</p>
            <h2 class="description__title title">Related Pieces</h2>
            <div class="description__actions">
              <button class="description__prev button is-rounded" @click="currentSlide += 1">
                <img src="@/assets/icon/arrow.png" />
                Drag
              </button>
              <p class="description__counter">
                {{ counter }}
                <span>/ {{ items.length }}</span>
              </p>
            </div>
          </div>

          <div class="items column is-9">
            <Carousel v-model="currentSlide" :settings="settings" :breakpoints="breakpoints" :wrapAround="true">
              <Slide v-for="(item, idx) of items" :key="idx">
                <div class="item">
                  <div class="item__wrapper">
                    <img class="item__image" :src="`/src/assets/img/${item?.imgPath}`" />
                    <div class="item__content">
                      <p class="item__category">{{ item?.category }}</p>
                      <h3 class="item__title title">{{ item?.subTitle }}</h3>
                      <p class="item__sku">Watch {{ item?.sku }}</p>
                      <p class="item__price">{{ item?.priceFormatted }}</p>
                    </div>
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { useSliderOptions } from './use/useSlider';

const { items, counter, currentSlide, settings, breakpoints } = useSliderOptions();
</script>

<style lang="scss" scoped>
@import './related-pieces.scss';
</style>
