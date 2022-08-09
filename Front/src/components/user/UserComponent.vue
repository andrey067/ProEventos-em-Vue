

<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue-demi"
import { useRoute } from "vue-router";

const route = useRoute();
const emit = defineEmits(['titulo'])

onMounted(() => {
    console.log("route", route.name);
    emit("titulo", titlePros(route.name?.toString()))
})

// watch(() => route.name, (first) => {
//     console.log("first", first)

// })

function titlePros(routername?: string): {} {
    let titulo = {};    
    switch (routername) {
        case "login":
            titulo = {
                mostrarTitulo: false
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

<style scoped>
</style>
