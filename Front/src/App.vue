
<template>
  <div class="common-layout">
    <MenuComponent />
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>


<script setup lang="ts">
import MenuComponent from './shared/MenuComponent.vue';
</script>

<style scoped>
</style>
