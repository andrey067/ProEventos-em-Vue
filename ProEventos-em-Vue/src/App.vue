<template class="container">
  <NavComponent />
  <router-view />
</template>

<script setup lang="ts">
import NavComponent from './components/layouts/NavComponent.vue';


</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

body {
  background: #f8f9fa;
}
</style>
