<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { watch } from "vue"
import { useRoute } from "vue-router";

const route = useRoute();
const emit = defineEmits(['titulo'])

watch(() => route.name, (first) => {
  emit("titulo", titlePros(first?.toString()))
})

function titlePros(routername?: string): {} {
  let titulo = {};

  switch (routername) {
    case "lista":
      titulo = {
        iconClass: 'fa fa-users',
        subtitulo: 'Lista de Eventos',
        titulo: "Evento",
        router: "evento"
      }
      break;
    case "detalhe":
      titulo = {
        iconClass: 'fa fa-users',
        subtitulo: 'Detalhes do Evento',
        titulo: "Evento",
        router: "evento"
      }
      break;
    default:
      titulo
  }
  return titulo;
}

</script>

<style>
</style>