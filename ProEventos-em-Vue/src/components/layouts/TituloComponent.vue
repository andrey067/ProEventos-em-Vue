<template>
    <section class="notification hero is-small is-info level">
        <div class="d-flex hero-body level-left">
            <div class="container">
                <h1 class="title">
                    {{ titulo }}
                </h1>
                <h2 class="subtitle">
                    {{ subtitulo }}
                </h2>
            </div>
            <div class="p-3 level-right" v-if="botaoListar">
                <button class="button is-normal is-rounded is-link" @click="listar()">Listar {{ titulo }}</button>
            </div>
        </div>

    </section>
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
    }
})


function listar() {

}
</script>

<style scoped>
i {
    margin-left: 10px;
    font-size: 48px;
}
</style>