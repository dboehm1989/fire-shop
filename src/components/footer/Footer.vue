<template>
  <footer class="footer">
    <div class="footer__body">
      <div class="container">
        <div class="footer__content columns">
          <div class="footer__address column is-3">
            <img class="footer__logo" src="@/assets/logo/logo.png" />
            <p>Watchesstrasse 9</p>
            <p>8006 Zürich</p>

            <div class="footer__contact">
              <ul>
                <li>
                  <b>T</b>
                  &emsp;+ 41 (0) 10 20 30 40
                </li>
                <li>
                  <b>F</b>
                  &emsp;+ 41 (0) 50 60 70 80
                </li>
                <li>
                  <b>M</b>
                  &ensp;
                  <a href="mailto:contact@thebrand.com">contact@thebrand.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer__customer column is-3">
            <MenuList title="Customer Care" :list="customerList" />
          </div>

          <div class="footer__customer column is-3">
            <MenuList title="Stay in touch" :list="newsletterList" />
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

<style lang="scss" scoped>
.footer {
  &__logo {
    max-width: 160px;
    margin-bottom: 1em;
  }

  p {
    margin-bottom: 1em;
  }

  a {
    color: var(--color-primary);
  }
}
</style>
