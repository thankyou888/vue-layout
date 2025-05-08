<script setup lang="ts">
import Header from './Layout/Header.vue';
import Footer from './Layout/Footer.vue';
</script>

<template>
  <Header />
  <main class="container mx-auto px-4 py-8">
    <router-view />
  </main>
  <Footer />
</template>

<style scoped></style>
