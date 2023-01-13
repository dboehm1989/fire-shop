<template>
  <footer class="footer">
    <div class="footer__body">
      <div class="container">
        <div class="footer__content columns">
          <div class="footer__address column is-3 mb-5">
            <BlockAddress />
          </div>

          <div class="footer__menu-1 column is-3 mb-5">
            <BlockMenu title="Customer Care" :list="customerList" />
          </div>

          <div class="footer__menu-2 column is-3">
            <BlockMenu title="Stay in touch" :list="newsletterList" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { customerList, newsletterList } from './menus';
import BlockAddress from './BlockAddress.vue';
import BlockMenu from './BlockMenu.vue';
</script>

<style lang="scss" scoped>
@import './footer.scss';
</style>
