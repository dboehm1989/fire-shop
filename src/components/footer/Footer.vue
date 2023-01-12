<template>
  <footer class="footer hero is-medium">
    <div class="footer__body hero-body">
      <div class="container">
        <div class="footer__content columns">
          <div class="footer__address column is-3">
            <img class="footer__logo" src="@/assets/logo/logo.png" />
            <p>Watchesstrasse 9</p>
            <p>8006 Zürich</p>

            <div class="footer__contact">
              <ul>
                <li>+ 41 (0) 10 20 30 40</li>
                <li>+ 41 (0) 50 60 70 80</li>
                <li><a href="mailto:contact@thebrand.com">contact@thebrand.com</a></li>
              </ul>
            </div>
          </div>

          <div class="footer__customer column is-2">
            <MenuList title="Customer Care" :list="customerList" />
          </div>

          <div class="footer__customer column is-2">
            <MenuList class="footer__customer column is-2" title="Stay in touch" :list="newsletterList" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { customerList, newsletterList } from './menus';
import MenuList from './MenuList.vue';
</script>

<style lang="scss" scoped></style>
