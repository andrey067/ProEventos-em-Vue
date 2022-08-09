<template>
    <div class="d-flex p-3 my-3 bg-secondary text-white rounded shadow-sm" v-if="mostrarTitulo">
        <div class="d-flex align-items-center mr-auto">
            <i class="{{iconClass}} mr-3"></i>
            <div class="lh-100">
                <h2 class="mb-0">{{ titulo }}</h2>
                <small>{{ subtitulo }}</small>
            </div>
        </div>
        <div class="p-3" v-if="botaoListar">
            <router-link class="btn btn-outline-light" :to="`/${titulo}/lista`">Listar {{ titulo }}</router-link>
        </div>
    </div>    
</template>

<script setup lang="ts">
defineProps({
    titulo: {
        type: String,
        default: "Evento"
    },
    subtitulo: {
        type: String,
        default: 'Lista  de Evento'
    },
    iconClass: {
        type: String,
        default: 'fa fa-user',
    },
    botaoListar: {
        type: Boolean,
        default: true
    },
    router: {
        type: String,
        default: 'evento'
    },
    mostrarTitulo: {
        type: Boolean,
        default: true
    },
})
</script>

<style scoped>
i {
    margin-left: 10px;
    font-size: 48px;
}
</style>