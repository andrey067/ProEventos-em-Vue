<template>
  <div class="container">
    <nav-component />
    <eventos-component />
    <!-- <palestrantes-component /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventosComponent from "./components/EventosComponent.vue";
import NavComponent from "./components/layouts/NavComponent.vue";
// import PalestrantesComponent from "./components/PalestrantesComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    EventosComponent,
    // PalestrantesComponent,
    NavComponent
  },
});
</script>

<style>
</style>
