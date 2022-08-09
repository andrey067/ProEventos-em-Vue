
<template>
  <div class="common-layout">
    <MenuComponent />
    <div class="container-fluid">
      <TituloComponent :titulo="dadosTitulo?.titulo" :subtitulo="dadosTitulo?.subtitulo"
        :icon-class="dadosTitulo?.iconClass" :botaolistar="dadosTitulo?.botaolistar"
        :mostrarTitulo="dadosTitulo?.mostrarTitulo" />

      <router-view @titulo="handleCustomChange" />
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { Titulo } from './interfaces/Titulo';
import MenuComponent from './shared/MenuComponent.vue';
import TituloComponent from './shared/TituloComponent.vue';
const dadosTitulo = ref<Titulo>();

function handleCustomChange(event: Event) {
  console.log("event", event);
  let titulo = event as unknown as Titulo;
  dadosTitulo.value = { ...titulo }
}

</script>

<style scoped>
</style>
