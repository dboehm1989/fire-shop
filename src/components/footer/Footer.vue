<template>
  <footer class="footer">
    <div class="footer__body">
      <div class="container">
        <div class="footer__content columns">
          <div class="column is-3">
            <BlockAddress />
          </div>

          <div class="column is-3">
            <BlockMenu title="Customer Care" :list="customerList" />
          </div>

          <div class="column is-3">
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
