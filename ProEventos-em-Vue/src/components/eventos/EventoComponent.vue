<template>
    <TituloComponent titulo="Eventos" subtitulo="Lista de Eventos" icon-class="fa-calendar" :botao-listar="true" />
    <router-view></router-view>
</template>

<script setup lang="ts">
import TituloComponent from '../../shared/TituloComponenent.vue';

</script>

<style scoped lang="css">
</style>
