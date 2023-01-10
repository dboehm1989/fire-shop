<template>
  <footer>
    <div class="container">
      <div class="grid-container">
        <div class="grid-item">Kontaktdaten</div>
        <div class="grid-item">Customer Care</div>
        <div class="grid-item">Stay in touch</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid-item {
  border: 1px solid black;
}
</style>
