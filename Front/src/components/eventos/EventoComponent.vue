<template>
  <TituloComponent :titulo="dadosTitulo?.titulo" :subtitulo="dadosTitulo?.subtitulo"
    :icon-class="dadosTitulo?.iconClass" :botaolistar="dadosTitulo?.botaolistar"
    :mostrarTitulo="dadosTitulo?.mostrarTitulo" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { useRoute } from "vue-router";
import { Titulo } from "../../interfaces/Titulo";
import TituloComponent from '../../shared/TituloComponent.vue'
const route = useRoute();

watch(() => route.name, (first) => {
  console.log("route", first)
  dadosTitulo.value = titlePros(first?.toString())
})

const dadosTitulo = ref<Titulo>();

function titlePros(routername?: string): Titulo {
  let titulo = {} as Titulo;
  switch (routername) {
    case "lista":
      titulo = {
        iconClass: 'fa fa-users',
        subtitulo: 'Lista de Eventos',
        titulo: "Evento",
        router: "evento",
        botaolistar: true,
        mostrarTitulo: true
      }
      break;
    case "detalhe":
      titulo = {
        iconClass: 'fa fa-users',
        subtitulo: 'Detalhes do Evento',
        titulo: "Evento",
        router: "evento",
        botaolistar: true,
        mostrarTitulo: true
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