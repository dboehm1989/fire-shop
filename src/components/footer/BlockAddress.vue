<template>
  <div class="address">
    <img class="address__logo" src="@/assets/logo/logo.png" />
    <p>Watchesstrasse 9</p>
    <p>8006 Zürich</p>

    <div class="address__contact">
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
</template>

<style lang="scss" scoped>
.address {
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
