<template>
  <Header />

  <main class="container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </main>

  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  padding: 20px;
  max-width: 1100px;
  margin: auto;
}

/* ----------- Animação ----------- */
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-enter-active {
  transition: 0.4s ease;
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-leave-active {
  transition: 0.4s ease;
}
</style>
