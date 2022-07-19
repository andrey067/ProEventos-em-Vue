<template>
    <div class="d-flex p-3 my-3 text-white bg-secondary rounded shadow-sm">
        <div class="d-flex align-items-center mr-auto">
            <i class="fa-calendar-alt"></i>
            <div class="lh-100">
                <!-- <h2 class="mb-0">{{ parametros.titulo }}</h2>
                <small>{{ parametros.subtitulo }}</small> -->
            </div>
        </div>
        <!-- <div class="p-3" v-if="botaoListar">
            <button class="btn btn-outline-light">
                Listar {{ props.titulo }}
            </button>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount } from "@vue/runtime-core";

const props = defineProps({
    parametros: Object()
});

onBeforeMount(() => setarDadosTitlo())
// defineProps({
//     botaoListar: Boolean
// })

function setarDadosTitlo() {
    console.log("parametros", props)
}
</script>


<style scoped>
i {
    margin-left: 10px;
    font-size: 48px;
}
</style>