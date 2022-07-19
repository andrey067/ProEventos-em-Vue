<template>
    <h1>Detalhe Eveto</h1>
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const route = useRoute();


onMounted(() =>{
    
    console.log(route.params)
})
</script>

<style scoped>
</style>
