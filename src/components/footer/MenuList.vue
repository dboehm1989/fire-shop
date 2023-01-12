<template>
  <h3 class="title">{{ title }}</h3>
  <ul>
    <li v-for="el of list">
      <a :href="el.path">{{ el.label }}</a>
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
