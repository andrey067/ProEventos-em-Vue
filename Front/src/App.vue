
<template>
  <div class="common-layout">
    <MenuComponent />
    <div class="container-fluid">
      <TituloComponent />
      <router-view />
    </div>
  </div>
</template>


<script setup lang="ts">
import MenuComponent from './shared/MenuComponent.vue';
import TituloComponent from './shared/TituloComponent.vue';

</script>

<style scoped>
</style>
