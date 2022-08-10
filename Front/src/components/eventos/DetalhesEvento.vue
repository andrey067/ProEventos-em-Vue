<template v-loading.fullscreen.lock="fullscreenLoading">
    <FormularioEvento class="card-evento-view" />    
</template>

<script setup lang="ts">
import FormularioEvento from './FormularioEvento.vue';

</script>

<style scoped lang="css">
.card-evento-view {
    justify-content: center;
    align-items: center;
    top: 10px;
    padding: 40px;
    width: 80%;
    margin-left: 8%;
}
</style>  
