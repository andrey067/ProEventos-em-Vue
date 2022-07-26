<template>
    <div class="d-flex p-3 my-3 text-white bg-secondary rounded shadow-sm justify-content-between">
        <div class="d-flex align-items-center mr-auto">
            <i class="{{iconClass}} mr-3"></i>
            <div class="lh-100">
                <h2 class="mb-0">{{ titulo }}</h2>
                <small>{{ subtitulo }}</small>
            </div>
        </div>
        <div class="p-3" v-if="botaoListar">
            <router-link class="btn btn-outline-light" :to="`${router}/lista`">
                Listar {{ titulo }}
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    titulo: {
        type: String,
        default: "Titulo"
    },
    subtitulo: {
        type: String,
        default: 'Desde 2021'
    },
    iconClass: {
        type: String,
        default: 'fa fa-user',
    },
    botaoListar: {
        type: Boolean,
        default: false
    },
    router: {
        type: String,
        default: ''
    }
})

</script>

<style scoped>
i {
    margin-left: 10px;
    font-size: 48px;
}
</style>