<template class="container">  
  <NavBarComponent/>
  <router-view />
</template>

<script setup lang="ts">
import NavBarComponent from './shared/navBarComponent.vue';


</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

body {
  background: #f8f9fa;
}
</style>
