<template>
  <div class="menu"></div>
  <p class="menu__label is-size-5">{{ title }}</p>
  <ul class="menu__list">
    <li v-for="el of list" class="menu__item">
      <a class="menu__link" :href="el.path">{{ el.label }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  title: {
    required: true,
    type: String,
  },
  list: {
    required: true,
    type: Array as PropType<{ label: string; path: string }[]>,
  },
});
</script>

<style lang="scss" scoped>
.menu {
  &__label {
    color: var(--color-black);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1em;
  }

  &__list {
    line-height: 1.75em;
  }

  &__link {
    color: var(--color-gray);
  }
}
</style>
