<template>
  <NavComponent />
  <TituloComponent :parametros="parametrosTitulo" />
  <router-view @dadosTitulo="setarNomeTitulo($event)" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Titulo } from './interfaces/Titulo';
import NavComponent from './components/layouts/NavComponent.vue';
import TituloComponent from './components/layouts/TituloComponent.vue';
const titulo = ref<String>('');
const subtitulo = ref<String>('');
const iconClass = ref<String>('');
const parametrosTitulo = ref<Titulo>();

function setarNomeTitulo(dadosTitulo: Titulo) {
  console.log("dadosTitulo", dadosTitulo)
  parametrosTitulo.value = dadosTitulo;
  // titulo.value = dadosTitulo.titulo
  // subtitulo.value = dadosTitulo.subtitulo
  // iconClass.value = dadosTitulo.iconClass
}

</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

body {
  background: #f8f9fa;
}
</style>
